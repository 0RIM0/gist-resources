def get_operators():
    def _get(exp, ctx, ev):
        path = exp.get("path") or exp.get("arg")
        default = exp.get("default")
        
        parts = path.split('.')
        root = parts[0]
        
        # ctx["vars"] が確実に存在することを前提に、存在チェック
        vars_dict = ctx.get("vars", {})
        req_dict = ctx.get("request", {})
        
        target = vars_dict if root in vars_dict else req_dict
        
        val = target
        try:
            for key in parts:
                if isinstance(val, dict):
                    val = val.get(key)
                else:
                    val = getattr(val, key, None)
            return val if val is not None else default
        except Exception:
            return default

    def _set(exp, ctx, ev):
        val = ev(exp["value"])
        ctx["vars"][exp["var"]] = val
        # 修正: 値そのものではなく True を返すことで、
        # && などの論理演算を中断させないようにする
        return True

    def _call(exp, ctx, ev):
        name = exp["name"]
        # 現在のルールで定義されたロジックを取得
        definition = ctx.get("defs", {}).get(name)
        
        if definition is None:
            raise ValueError(f"Definition '{name}' not found in current rule.")
        
        # 取得した定義(Exp)を評価して返す
        return ev(definition)

    def _block(exp, ctx, ev):
        res = None
        for arg in exp.get("args", []):
            res = ev(arg)
        # 修正: 最後の評価結果を返す（RubyやLispのブロックに近い挙動）
        return res

    return {
        "if": lambda exp, ctx, ev: ev(exp["then"]) if ev(exp["test"]) else ev(exp["else"]),
        "get": _get,
        "set": _set,
        "call": _call,
        "block": _block,
        "&&": lambda exp, ctx, ev: all(ev(arg) for arg in exp.get("args", [])),
        "||": lambda exp, ctx, ev: any(ev(arg) for arg in exp.get("args", [])),
        "!": lambda exp, ctx, ev: not ev(exp["arg"]),
    }
