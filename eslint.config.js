const js = require('@eslint/js');

module.exports = [
    js.configs.recommended, {
        languageOptions : {
            ecmaVersion : 2022,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                __dirname: 'readonly'
            }
        },
        rules : {
            'no-unused-vars' : 'warn'
        }
    },
    //Configuraciones adicionales
    {
        files: ['test/**/*.js'],
        languageOptions: {
            globals: {
                require: 'readonly',
                module: 'writable',
                exports: 'writable',
                describe: 'readonly',
                test:'readonly',
                expect:'readonly',
                beforeEach:'readonly',
                jest:'readonly'
            }
}

    },
    //Exclusiones globales
    {
        ignores: ['node_modules/', 'logs/']
    }
];