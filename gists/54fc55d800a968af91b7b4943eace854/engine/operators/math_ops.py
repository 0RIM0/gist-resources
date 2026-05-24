from functools import reduce

def get_operators():
    # ヘルパー: args または arg から評価済みの数値リストを取得する
    def _ev_list(exp, ctx, ev):
        if "args" in exp:
            return [ev(a) for a in exp["args"]]
        if "arg" in exp:
            return [ev(exp["arg"])]
        return []

    return {
        # 加算: [1, 2, 3] -> 1 + 2 + 3
        "+": lambda exp, ctx, ev: sum(_ev_list(exp, ctx, ev)),

        # 減算: [10, 2, 3] -> 10 - 2 - 3 = 5
        "-": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and reduce(lambda a, b: a - b, nums),

        # 乗算: [2, 3, 4] -> 2 * 3 * 4 = 24
        "*": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and reduce(lambda a, b: a * b, nums),

        # 除算: [100, 2, 5] -> 100 / 2 / 5 = 10.0
        "/": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and reduce(lambda a, b: a / b, nums),

        # 等価: すべての要素が等しい [10, 10, 10] -> True
        "==": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and all(x == nums[0] for x in nums),

        # 不等: 隣り合う要素がすべて異なる [1, 2, 1] -> True
        "!=": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and all(nums[i] != nums[i+1] for i in range(len(nums)-1)),

        # 大なり: 左から順に小さくなる（降順） [10, 5, 2] -> True
        ">": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and all(nums[i] > nums[i+1] for i in range(len(nums)-1)),

        # 小なり: 左から順に大きくなる（昇順） [2, 5, 10] -> True
        "<": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and all(nums[i] < nums[i+1] for i in range(len(nums)-1)),

        # 大なりイコール: [10, 10, 5] -> True
        ">=": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and all(nums[i] >= nums[i+1] for i in range(len(nums)-1)),

        # 小なりイコール: [2, 2, 10] -> True
        "<=": lambda exp, ctx, ev: (nums := _ev_list(exp, ctx, ev)) and all(nums[i] <= nums[i+1] for i in range(len(nums)-1)),

        "abs": lambda exp, ctx, ev: abs(ev(exp["arg"])),
        "round": lambda exp, ctx, ev: round(ev(exp["arg"]), exp.get("ndigits", 0)),
    }
