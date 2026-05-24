import unittest
from engine import RuleEngine, create_processor

class TestRuleEngine(unittest.TestCase):
    def setUp(self):
        self.engine = RuleEngine()

    def test_math_variadic(self):
        """数値演算の可変長引数テスト"""
        # 加算: 1+2+3+4 = 10
        self.assertEqual(self.engine.evaluate({"op": "+", "args": [1, 2, 3, 4]}, {}), 10)
        # 減算: 100-20-10 = 70
        self.assertEqual(self.engine.evaluate({"op": "-", "args": [100, 20, 10]}, {}), 70)
        # 乗算: 2*3*4 = 24
        self.assertEqual(self.engine.evaluate({"op": "*", "args": [2, 3, 4]}, {}), 24)
        # 除算: 100/5/2 = 10
        self.assertEqual(self.engine.evaluate({"op": "/", "args": [100, 5, 2]}, {}), 10.0)

    def test_comparison_chain(self):
        """比較演算の連鎖テスト"""
        # 全一致
        self.assertTrue(self.engine.evaluate({"op": "==", "args": [10, 10, 10]}, {}))
        self.assertFalse(self.engine.evaluate({"op": "==", "args": [10, 10, 11]}, {}))
        # 降順 (10 > 5 > 2)
        self.assertTrue(self.engine.evaluate({"op": ">", "args": [10, 5, 2]}, {}))
        self.assertFalse(self.engine.evaluate({"op": ">", "args": [10, 11, 2]}, {}))
        # 昇順 (1 < 5 < 10)
        self.assertTrue(self.engine.evaluate({"op": "<", "args": [1, 5, 10]}, {}))

    def test_string_ops(self):
        """文字列操作テスト"""
        # ctx 構造を engine.run と合わせる
        ctx = {"request": {"user": "Alice"}, "vars": {}}
        
        # 結合
        exp = {"op": "concat", "args": ["Hello, ", {"op": "get", "path": "user"}, "!"]}
        self.assertEqual(self.engine.evaluate(exp, ctx), "Hello, Alice!")

    def test_logic_and_vars(self):
        """論理演算と変数セットのテスト"""
        rules = [
            {
                "condition": {
                    "op": "&&",
                    "args": [
                        {"op": "set", "var": "is_admin", "value": {"op": "==", "args": [{"op": "get", "path": "role"}, "admin"]}},
                        {"op": "get", "path": "is_admin"}
                    ]
                },
                "expression": {"op": "concat", "args": ["Admin Mode: ", {"op": "get", "path": "user"}]}
            }
        ]
        process = create_processor(rules)
        self.assertEqual(process({"role": "admin", "user": "Ken"}), "Admin Mode: Ken")
        self.assertIsNone(process({"role": "guest", "user": "Ken"}))

    def test_list_map_it(self):
        """リスト操作(map)と特殊変数 'it' のテスト"""
        ctx = {"request": {"items": [1, 2, 3]}}
        # 各要素を2倍にする
        exp = {
            "op": "map",
            "list": {"op": "get", "path": "items"},
            "each": {"op": "*", "args": [{"op": "get", "path": "it"}, 2]}
        }
        # evaluateを呼ぶ際は ctx 構造が必要
        full_ctx = {"request": ctx["request"], "vars": {}}
        self.assertEqual(self.engine.evaluate(exp, full_ctx), [2, 4, 6])

    def test_nested_get_with_default(self):
        """階層構造の取得とデフォルト値のテスト"""
        request = {"a": {"b": {"c": 100}}}
        # 存在するパス
        self.assertEqual(self.engine.evaluate({"op": "get", "path": "a.b.c"}, {"request": request, "vars": {}}), 100)
        # 存在しないパス + デフォルト値
        self.assertEqual(self.engine.evaluate({"op": "get", "path": "a.x.y", "default": "N/A"}, {"request": request, "vars": {}}), "N/A")

    def test_reusable_logic(self):
        """definitions を使ったロジックの再利用テスト"""
        rules = [
            {
                "definitions": {
                    "is_premium": { "op": "==", "args": [{ "op": "get", "path": "user.rank" }, "gold"] },
                    "calc_discount": { 
                        "op": "if", 
                        "test": { "op": "call", "name": "is_premium" }, 
                        "then": 0.2, 
                        "else": 0.05 
                    }
                },
                "condition": { "op": ">", "args": [{ "op": "get", "path": "price" }, 1000] },
                "expression": {
                    "op": "*",
                    "args": [
                        { "op": "get", "path": "price" },
                        { "op": "-", "args": [1, { "op": "call", "name": "calc_discount" }] }
                    ]
                }
            }
        ]
        
        process = create_processor(rules)
        
        # プレミアムユーザー (20% OFF)
        self.assertEqual(process({"price": 2000, "user": {"rank": "gold"}}), 1600)
        # 一般ユーザー (5% OFF)
        self.assertEqual(process({"price": 2000, "user": {"rank": "silver"}}), 1900)

    def test_definition_isolation(self):
        """definitions がルール間で独立しているかテスト"""
        rules = [
            {
                "definitions": { "local_val": 100 },
                "condition": False,
                "value": "wont run"
            },
            {
                "condition": True,
                # 前のルールの local_val は参照できないはず
                "expression": { "op": "call", "name": "local_val" }
            }
        ]
        
        process = create_processor(rules)
        with self.assertRaises(ValueError):
            process({})

    def test_nested_call(self):
        """call の中からさらに call を呼ぶテスト"""
        rules = [{
            "definitions": {
                "base": 10,
                "double_base": { "op": "*", "args": [{ "op": "call", "name": "base" }, 2] }
            },
            "condition": True,
            "expression": { "op": "call", "name": "double_base" }
        }]
        process = create_processor(rules)
        self.assertEqual(process({}), 20)

    def test_custom_op_style(self):
        """call を使わず、op に直接定義名を書くテスト"""
        rules = [{
            "definitions": {
                "is_gold": { "op": "==", "args": [{ "op": "get", "path": "user.rank" }, "gold"] }
            },
            "condition": { "op": "is_gold" }, # 直接 op として使用
            "value": "Welcome Gold User"
        }]
        process = create_processor(rules)
        self.assertEqual(process({"user": {"rank": "gold"}}), "Welcome Gold User")

    def test_block_and_set_complex_flow(self):
        """
        block 内で set を連鎖させ、最後に判定式を置く『カッコいい書き方』のテスト。
        set が 0 や False を保持しても評価が止まらないことを検証。
        """
        rules = [
            {
                "condition": {
                    "op": "block",
                    "args": [
                        # 1. 0をセット（これまでの仕様ならここで evaluation が False になり中断していた）
                        {"op": "set", "var": "discount_amount", "value": 0},
                        
                        # 2. 変数を使って計算し、別の変数にセット
                        {"op": "set", "var": "tax_rate", "value": 0.1},
                        {"op": "set", "var": "total", "value": {
                            "op": "*", 
                            "args": [
                                {"op": "get", "path": "price"}, 
                                {"op": "+", "args": [1, {"op": "get", "path": "tax_rate"}]}
                            ]
                        }},
                        
                        # 3. 最後に判定式（これが block の返り値になる）
                        {"op": ">", "args": [{"op": "get", "path": "total"}, 5000]}
                    ]
                },
                "expression": {
                    "op": "concat", 
                    "args": ["High-value item: ", {"op": "get", "path": "total"}]
                }
            }
        ]
        
        process = create_processor(rules)

        # ケースA: 税込 5500円（5000 * 1.1） -> 条件一致
        res_a = process({"price": 5000})
        self.assertEqual(res_a, "High-value item: 5500.0")

        # ケースB: 税込 1100円（1000 * 1.1） -> 条件不一致（Noneが返る）
        res_b = process({"price": 1000})
        self.assertIsNone(res_b)

    def test_block_in_expression(self):
        """expression 側で block を使い、計算してから最終的な値を返すテスト"""
        rules = [{
            "condition": True,
            "expression": {
                "op": "block",
                "args": [
                    {"op": "set", "var": "tag", "value": "SALE"},
                    {"op": "concat", "args": [{"op": "get", "path": "tag"}, ": ", {"op": "get", "path": "name"}]}
                ]
            }
        }]
        
        process = create_processor(rules)
        self.assertEqual(process({"name": "Laptop"}), "SALE: Laptop")

    def test_set_always_true_in_and(self):
        """&& の中で set 0 をしても、後ろの判定が実行されることを検証"""
        rules = [{
            "condition": {
                "op": "&&",
                "args": [
                    {"op": "set", "var": "flag", "value": 0},
                    {"op": "==", "args": [1, 1]}
                ]
            },
            "value": "Passed"
        }]
        
        process = create_processor(rules)
        self.assertEqual(process({}), "Passed")

if __name__ == '__main__':
    unittest.main()
