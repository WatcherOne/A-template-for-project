module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    rules: {
        'vue/no-v-html': 'off',
        'generator-star-spacing': 'off',
        'no-multi-spaces': 0,
        'semi': [0, 'always'],
        'no-mixed-spaces-and-tabs': [2, false],
        'space-before-function-paren': [0, false],
        'keyword-spacing': 0,
        'no-tabs': 0,
        'one-var': 0,
        'indent': [0, false],
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
}