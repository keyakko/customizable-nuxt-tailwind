module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'vue/singleline-html-element-content-newline': 0,
    'space-before-function-paren': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
  },
}
