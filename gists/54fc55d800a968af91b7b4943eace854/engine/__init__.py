from .core import RuleEngine

def create_processor(rules, custom_ops=None):
    engine = RuleEngine(custom_ops)
    return lambda request: engine.run(rules, request)
