/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 为ESLint扩展其它配置文件
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 使用prettier的规则格式化代码
    './.eslintrc-auto-import.json', // 使eslint识别自动引入的组件和API
    'plugin:jsdoc/recommended'
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        // 限制整个 .vue 文件的代码行数（包括模板、脚本和样式）不超过 300 行
        'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }]
      }
    }
  ],
  parser: 'vue-eslint-parser', // 配置ESLint解析器
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser', // 配置JS解析器
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'jsdoc'],
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭Vue3中要求.vue文件的名称必须为多个单词的检查
    'no-unused-vars': 'off', // 关闭Javascript变量未使用时的校验，在Typescript项目中必须禁用此校验，否则会误报
    '@typescript-eslint/no-unused-vars': 'warn', // Typescript变量未使用时，仅发出警告，而不阻止程序运行
    'jsdoc/require-jsdoc': [
      'error',
      {
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: ['TSInterfaceDeclaration'] // 检查接口是否写注释
      }
    ],

    // 强制在注释中 // 或 /* 使用一致的空格。您可以通过这个规则来统一注释的格式
    'spaced-comment': ['error', 'always']
    // 自定义规则
    // my-custom-rule': 'error',
  }
}
