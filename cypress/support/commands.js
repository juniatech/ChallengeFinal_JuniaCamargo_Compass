// COMANDOS PERSONALIZADOS 

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