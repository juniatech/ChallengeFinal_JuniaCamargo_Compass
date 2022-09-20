// COMANDOS PERSONALIZADOS 

import Ajv from 'ajv'
const ajv = new Ajv({allErrors: true, verbose: true, strict: false})

// schema para validação do contrato 
// forçando erro para a construção de teste
Cypress.Commands.add('contractValidation', (res, schema, status) => {
    cy.log('Validando contrato para ' + schema + ' com status ' + status)
    cy.fixture(`schemas/${schema}/${status}.json`).then(schema => {
        const validate = ajv.compile(schema)
        const valid = validate(res.body)

        if(!valid){
           var errors = ''
           for(let each in validate.errors){
               let err = validate.errors[each]
               errors += `\n${err.instancePath} ${err.message}, but receive ${typeof err.data}` //recebeu um valor string, mas deveria ter recebido um valor inteiro
           }
           throw new Error('Erros encontrados na validação de contrato, por favor verifique: ' + errors)
        }
        return true
    })
})

// Deve impedir o cadastro do usuário com email já utilizado
Cypress.Commands.add('POSTUsuarios400', () => { 
    return cy.request({
        method: 'POST',
        url: '/usuarios', 
        failOnStatusCode: false,
        body: {
            "nome": "Faye",
            "email": "Laney20@gmail.com",
            "password": "mzz3q3MSB6OHNzd",
            "administrador": "true",
        }
    })
 })

// Deve listar todos os usuários cadastrados
Cypress.Commands.add('rest', (method = 'GET', url = '/', body = null, failOnStatusCode = false) => {
    return cy.request({
        method: method,
        url: url,
        failOnStatusCode: failOnStatusCode, 
        body: body
    })
})

// Deve buscar um usuario para login 
Cypress.Commands.add('buscarUsuarioParaLogin', () => {
    cy.rest('GET', '/usuarios').then(resposta => {
        expect(resposta.body).to.haveOwnProperty('usuarios')
        return {
            email: resposta.body.usuarios[0].email,
            senha: resposta.body.usuarios[0].password 
        }
    })
})

// Deve realizar o login do usuario com sucesso 
Cypress.Commands.add('logar', (email, senha) => {
    return cy.request({
        method: 'POST',
        url: '/login',
        failOnStatusCode: false,
        body: {
            "email": email,
            "password": senha
        }
    })
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })