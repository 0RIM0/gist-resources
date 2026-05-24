from typing import Any, Dict, List, Optional
from .operators import get_all_operators

class RuleEngine:
    def __init__(self, custom_ops=None):
        self.operators = get_all_operators()
        if custom_ops: self.operators.update(custom_ops)

    def evaluate(self, exp: Any, ctx: Dict) -> Any:
        # ... (ctxの初期化ガードなどは維持) ...

        if not isinstance(exp, dict) or "op" not in exp:
            return exp
        
        op_name = exp["op"]
        
        # 1. JSON内の定義 (definitions) を優先チェック
        custom_def = ctx.get("defs", {}).get(op_name)
        if custom_def is not None:
            # 見つかった場合は、その定義内容を再帰的に評価
            return self.evaluate(custom_def, ctx)
        
        # 2. 標準の演算子 (builtin) をチェック
        operator = self.operators.get(op_name)
        if operator:
            return operator(exp, ctx, lambda e: self.evaluate(e, ctx))
            
        raise ValueError(f"Unknown operator or definition: {op_name}")

    def run(self, rules: List[Dict], request: Any) -> Any:
        # 実行ごとに共通のコンテキストを作成
        ctx = {
            "request": request,
            "vars": {},
            "defs": {}  # ルール固有の定義用
        }
        
        for rule in rules:
            # 各ルールの definitions をコンテキストにロード
            ctx["defs"] = rule.get("definitions", {})
            
            if self.evaluate(rule.get("condition"), ctx):
                if "value" in rule:
                    return rule["value"]
                return self.evaluate(rule.get("expression"), ctx)
        return None
