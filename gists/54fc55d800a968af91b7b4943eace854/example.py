from engine import create_processor

# ルール定義
rules = [
    {
        # 文字列操作と正規表現の組み合わせ
        "condition": {
            "op": "regex_match",
            "arg": { "op": "get", "path": "user.email" },
            "pattern": r"@example\.com$"
        },
        "expression": {
            "op": "concat",
            "args": [
                "Welcome internal user: ",
                { "op": "upper", "arg": { "op": "get", "path": "user.id" } }
            ]
        }
    }
]

# プロセッサの作成
process = create_processor(rules)

# 実行
result = process({
    "user": {
        "email": "test@example.com",
        "id": "admin-01"
    }
})

print(result) # Welcome internal user: ADMIN-01
