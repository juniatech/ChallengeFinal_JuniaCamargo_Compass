/// <reference types="cypress" />


// ***********************************************************
// INDICAR QUAIS PASTAS O CYPRESS IRÁ RECONHECER COMO AMBIENTE DE EXECUÇÃO
const fs = require('fs-extra');
const path = require('path');

function buscarArquivoDeConfig(arquivo) {
    const caminhoDoArquivo = path.resolve('.', 'cypress', 'config', `${arquivo}.json`)
    return fs.readJson(caminhoDoArquivo)
}

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on); // reporter cypress mochawesome
    const arquivo = config.env.configFile || 'dev'
    return buscarArquivoDeConfig(arquivo)
}

