module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      //  'plugin:prettier/recommended', // Enables the prettier plugin
        'plugin:@typescript-eslint/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: [
        'react-hooks'
    ],
    rules: {
        // React Hooks Rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // Disabled Rules
        "@typescript-eslint/explicit-function-return-type": "off",
        // Enabled Rules
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/no-inferrable-types": [
            "warn", {
                "ignoreParameters": true
            }
        ],
        "@typescript-eslint/no-unused-vars": "warn"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true,
        },
        /**
         * project => default undefined. This option allows you to provide a path to your project's
         * tsconfig.json. This setting is required if you want to use rules which require type
         * information. You may want to use this setting in order with the tsconfigRootDir option
         * below.
         */
        project: './tsconfig.json',
    },
    // Defining global variables
    env: {
        'es6': true, // browser global variables example: Not put error on async/await.
        'browser': true, // Node.js global variables and Node.js scoping. window, document setTimeout
        'node': true // https, require
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
