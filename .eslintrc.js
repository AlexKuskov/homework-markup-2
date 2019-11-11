module.exports = {
    extends: "standard",
    rules: {
        "for-direction": "error",
        indent: [
            "error", 
            2, 
            { 
                "VariableDeclarator": { 
                    "var": 2, 
                    "let": 2, 
                    "const": 3
                } 
            }
        ],
        "semi-spacing": [
            "error", 
            { 
                "before": true, 
                "after": false 
            }
        ],
        semi: ["error", "always"],
        "arrow-body-style": ["error", "always"]
    }
}