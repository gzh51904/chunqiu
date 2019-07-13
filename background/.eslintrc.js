module.exports = {
    rules:{
        // 禁止使用 console
        // @off console 的使用很常见
        'no-console': 'off',
        'vue/no-parsing-error': [2, {
            "x-invalid-end-tag": false
          }]
    }
}