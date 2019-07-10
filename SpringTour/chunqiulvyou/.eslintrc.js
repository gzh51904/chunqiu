module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        commonjs: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: "standard",
    
    // required to lint *.vue files
    plugins: [
        "html"
    ],
    rules:{
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 'off',
    }
}