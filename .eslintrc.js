module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parser": "babel-eslint",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
        // always require semi-colons for statements
        "semi": "error"
    }
};
