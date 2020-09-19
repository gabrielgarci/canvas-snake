module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": ["error", "always"],
        "max-len": ["error", { "code": 120 }],
        "no-unused-expressions": ["error", {"allowTernary": true}],
        "linebreak-style": ["error", "windows"]
    }
}