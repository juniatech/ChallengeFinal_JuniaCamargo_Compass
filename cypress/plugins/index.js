/// <reference types="cypress" />

// reporter cypress mochawesome
module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
  };

// ***********************************************************
// INDICAR QUAIS PASTAS O CYPRESS IRÁ RECONHECER COMO AMBIENTE DE EXECUÇÃO
const fs = require('fs-extra');
const path = require('path');

function buscarArquivoDeConfig(arquivo) {
    const caminhoDoArquivo = path.resolve('.', 'cypress', 'config', `${arquivo}.json`)
    return fs.readJson(caminhoDoArquivo)
}

module.exports = (on, config) => {
  const arquivo = config.env.configFile || 'dev'
  return buscarArquivoDeConfig(arquivo)
}

