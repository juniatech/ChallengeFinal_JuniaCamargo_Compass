/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /usuarios e /login da API', () => {
    
    // GET/usuarios(200)
    it('Deve listar todos os usuários cadastrados', () => {
        cy.request('/usuarios').then(res => {
            expect(res).to.be.a('object')
            expect(res.body.quantidade).to.be.a('number')
            expect(res.body.quantidade).to.be.greaterThan(0) // greaterThan() = Maior que
            expect(res.status).to.eq(200)
        })
    }) 

    // *POST/usuarios(201)
    it.only('Deve realizar o Cadastro do usuário com sucesso', () => {
        // mesma logica de se fazer o cadastro dos produtos
    })

    // POST/usuarios(400)
    it('Deve impedir o cadastro do usuário com email já utilizado', () => {
        cy.POSTUsuarios400().then(res => {
            expect(res).to.be.a('object')
            expect(res.body.message).to.be.a('string')
            expect(res.body.message).to.be.eq('Este email já está sendo usado')
            expect(res.status).to.eq(400)
        })
    })

    // Comando rest personalizado
    it('Deve validar o comando "rest" personalizado', () => {
        cy.rest('GET', '/usuarios').then(res => {
            expect(res).to.be.a('object')
            cy.log(JSON.stringify(res)) // stringify = converte valores em javascript para uma String JSON.
        })
    })

    // POST/login(200)
    it('Deve realizar o login do usuario com sucesso ', () => {
        cy.buscarUsuarioParaLogin().then(usuario => {
            cy.logar(usuario.email, usuario.senha).then(res => {
                expect(res).to.be.a('object')
                expect(res.body.message).to.be.a('string')
                expect(res.body).to.haveOwnProperty('authorization') // haveOwnProperty() = retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
                expect(res.status).to.eq(200)
                var bearer = res.body.authorization.slice(7)
                cy.log(bearer) // bearer = Token de autorização de acesso
            })
        })
    })

    // POST/login(400)
    it('Deve trazer a menssagem de E-mail e/ou senha inválidos', () => {
        // fazer depois
    })
})



