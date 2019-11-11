module.exports = {
    extends: "standard",
    rules: {
        "for-direction": 2,
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
        semi: 0,
        "arrow-body-style": ["error", "always"]
    }
}