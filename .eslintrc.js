module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:vue/vue3-recommended',
        'plugin:vue/essential',
        'plugin:prettier-vue/recommended',
        'prettier/vue',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    settings: {
        'prettier-vue': {
            // Settings for how to process Vue SFC Blocks
            SFCBlocks: {
                /**
                 * Use prettier to process `<template>` blocks or not
                 *
                 * If set to `false`, remember not to `extends: ['prettier/vue']`, as you need the rules from `eslint-plugin-vue` to lint `<template>` blocks
                 *
                 * @default true
                 */
                template: true,

                /**
                 * Use prettier to process `<script>` blocks or not
                 *
                 * @default true
                 */
                script: true,

                /**
                 * Use prettier to process `<style>` blocks or not
                 *
                 * @default true
                 */
                style: true,

                // Settings for how to process custom blocks
                customBlocks: {
                    // Treat the `<docs>` block as a `.markdown` file
                    docs: { lang: 'markdown' },

                    // Treat the `<config>` block as a `.json` file
                    config: { lang: 'json' },

                    // Treat the `<module>` block as a `.ts` file
                    module: { lang: 'ts' },

                    // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
                    comments: false,

                    // Other custom blocks that are not listed here will be ignored
                },
            },

            // Use prettierrc for prettier options or not (default: `true`)
            usePrettierrc: true,

            // Set the options for `prettier.getFileInfo`.
            // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
            fileInfoOptions: {
                // Path to ignore file (default: `'.prettierignore'`)
                // Notice that the ignore file is only used for this plugin
                ignorePath: '.testignore',

                // Process the files in `node_modules` or not (default: `false`)
                withNodeModules: false,
            },
        },
    },
    plugins: ['prettier'],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'prettier-vue/prettier': [
            'error',
            {
                // Override all options of `prettier` here
                // @see https://prettier.io/docs/en/options.html
                printWidth: 100,
                singleQuote: true,
                semi: true,
                trailingComma: 'es5',
            },
        ],
        'prettier/prettier': 'error',
    },
};
