import re

def get_operators():
    return {
        # 結合: { "op": "concat", "args": ["Hello ", { "op": "get", "arg": "name" }] }
        "concat": lambda exp, ctx, ev: "".join(str(ev(a)) for a in exp.get("args", [])),
        
        # 部分文字列: { "op": "slice", "arg": Exp, "start": 0, "end": 5 }
        "slice": lambda exp, ctx, ev: str(ev(exp["arg"]))[exp.get("start", 0):exp.get("end")],
        
        # 置換: { "op": "replace", "arg": Exp, "old": "foo", "new": "bar" }
        "replace": lambda exp, ctx, ev: str(ev(exp["arg"])).replace(exp["old"], exp["new"]),
        
        # 正規表現マッチ: { "op": "regex_match", "arg": Exp, "pattern": "^[0-9]+$" }
        "regex_match": lambda exp, ctx, ev: bool(re.search(exp["pattern"], str(ev(exp["arg"])))),
        
        # 大文字・小文字
        "upper": lambda exp, ctx, ev: str(ev(exp["arg"])).upper(),
        "lower": lambda exp, ctx, ev: str(ev(exp["arg"])).lower(),
    }