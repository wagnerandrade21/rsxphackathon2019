module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",     // todos o erros que o prettier encontrar retornarão erro no eslint
    "class-methods-use-this": "off",  // todos método de uma classe precisa utilizar this, "off" esse padrão
    "no-param-reassign": "off",       // permite que receba um parametro e faça alterações nele
    "camelcase": "off",               // desobriga o uso de variaveis camel case, exemplo: nossaVariavel
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }], // por padrão não permite declarar variaveis que não vão ser usadas, 
                                                                  // abre excessão para a variável "next"
  },
};