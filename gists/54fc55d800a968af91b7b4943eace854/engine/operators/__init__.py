from . import math_ops, logic_ops, string_ops, list_ops

def get_all_operators():
    all_ops = {}
    all_ops.update(math_ops.get_operators())
    all_ops.update(logic_ops.get_operators())
    all_ops.update(string_ops.get_operators())
    all_ops.update(list_ops.get_operators())
    return all_ops
