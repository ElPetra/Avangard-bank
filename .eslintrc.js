/* eslint-disable */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        "plugin:prettier/recommended"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        "indent": ["error", 4, { "SwitchCase": 1 }, ],
        'linebreak-style': ['error', 'windows'],
        'react/jsx-filename-extension': 
        [2, 
        { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        "no-undef": "off",
        'consistent-return': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-no-useless-fragment': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': 'off',
        "no-param-reassign": [
            "error",
            {
            "props": true,
            "ignorePropertyModificationsFor": ["state"]
            }
        ],
        "max-len": [
            "error",
            {
                "code": 130,
                "ignoreUrls": true,
                "ignoreComments": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true
            }
        ],
        'prettier/prettier': ["error", {
          "printWidth": 80,
          "tabWidth": 4,
          'endOfLine': 'crlf',
          "singleQuote": true,
          "trailingComma": "all"
      }]
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*/test/{ts.tsx}'],
            rules:{
                'i18next/no-literal-string': 'off'
            }
        }
    ]
};