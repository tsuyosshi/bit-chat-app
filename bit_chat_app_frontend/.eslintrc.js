module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import', 'unused-imports'],
  extends: '@react-native',
  rules: {
    // prettierの結果をESLintの結果として表示する
    'prettier/prettier': 'warn',
    // importの並び順をチェックする
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    // 未使用のimportがあるかチェックする
    'unused-imports/no-unused-imports-ts': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
