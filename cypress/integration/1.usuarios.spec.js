/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'
import Factory from '../fixtures/factory'

describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {

    // GET/usuarios(200)
    it('Deve buscar todos os usuários cadastrados na Serverest', () => {
        Serverest.buscarUsuarios().then(res => {
            cy.log('Será validado o contrato')
            cy.contractValidation(res, 'get-usuarios', 200)
            ValidaServerest.validarBuscaDeUsuarios(res)
            //ValidaServerest.validarBuscaDeUsuarios(res)
        })
    })

    // POST/usuários(400) 
    // fazer service object
    it('Não deve postar um novo usuário administrador existente', () => {
        cy.POSTUsuarios400().then(res => {
            cy.contractValidation(res, 'post-usuarios', 400)
            expect(res.body.message).to.be.eq('Este email já está sendo usado')
        })
    })

    // POST/login(200)
    it('Deve realizar login com sucesso', () => {
        Serverest.buscarUsuarioParaLogin()
        cy.get('@usuarioLogin').then(usuario => {
            Serverest.logar(usuario).then(res => {
                ValidaServerest.validarLoginComSucesso(res)
                Serverest.salvarBearer(res)
            })
        })
    })

    it('Deve buscar salvar um usuário em um arquivo json', () => {
        let inteiro = Factory.gerarInteiroAleatorio()
        Serverest.buscarUsuarios().then(res => {
            // cy.log(JSON.stringify(res.body.usuarios[0]))
            cy.writeFile('./cypress/fixtures/usuario.json', res.body.usuarios[inteiro])
            ValidaServerest.validarBuscaDeUsuarios(res)
        })
    })

    it('Deve buscar o usuário de um arquivo json', () => {
        cy.fixture('usuario.json').then(json => {
            let usuario = {
                email: json.email,
                password: json.password
            }
            Serverest.logar(usuario).then(res => {
                ValidaServerest.validarLoginComSucesso(res)
                Serverest.salvarBearer(res)
            })
            //cy.log(JSON.stringify(json))
            //cy.log("Nome >>" + JSON.stringify(json.nome))
            //cy.log("ID >>" + JSON.stringify(json._id))
        })
    })
})