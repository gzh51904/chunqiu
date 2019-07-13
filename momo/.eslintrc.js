module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    rules:{
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 'off',
    }
}