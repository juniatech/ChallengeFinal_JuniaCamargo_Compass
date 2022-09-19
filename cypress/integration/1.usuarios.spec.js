/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'
import Factory from '../fixtures/factory'

describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {

    // GET/usuarios(200)
    it.only('Deve buscar todos os usuários cadastrados na Serverest', () => {
        Serverest.buscarUsuarios().then(res => {
            ValidaServerest.validarBuscaDeUsuarios(res)
        })
    })

    // POST/usuários(400)
    it('Não deve postar um novo usuário administrador existente', () => {
        cy.postarUsuarioSemSucesso().then(res => {
            expect(res).to.be.a('object')
            expect(res.body.message).to.be.a('string')
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

    it('Deve buscar salvar um usuário em um arquivo json', () => {
        let inteiro = Factory.gerarInteiroAleatorio()
        Serverest.buscarUsuarios().then(res => {
            // cy.log(JSON.stringify(res.body.usuarios[0]))
            cy.writeFile('./cypress/fixture/usuario.json', res.body.usuarios[inteiro])
            ValidaServerest.validarBuscaDeUsuarios(res)
        })
    })
})