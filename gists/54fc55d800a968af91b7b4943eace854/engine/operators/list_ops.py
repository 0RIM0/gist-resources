def get_operators():
    def _map(exp, ctx, ev):
        items = ev(exp["list"])
        if not isinstance(items, list): return []
        
        res = []
        for item in items:
            # ctx["vars"] の中に一時的に "it" を入れる
            # ※ネストしたループを考慮し、元の値を退避させておく
            old_it = ctx["vars"].get("it")
            ctx["vars"]["it"] = item
            res.append(ev(exp["each"]))
            ctx["vars"]["it"] = old_it
        return res

    return {
        "map": _map,
        "in": lambda exp, ctx, ev: ev(exp.get("arg")) in ev(exp.get("list", [])),
        "count": lambda exp, ctx, ev: len(ev(exp.get("arg", []))),
    }
