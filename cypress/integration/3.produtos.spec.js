/// <reference types="cypress" />

import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'

describe('Casos de teste sobre a rota /produtos da API Serverest', () => {

    //GET/produtos(200)
    it('Deve buscar todos os produtos cadastrados', () => {
        Serverest.buscarProdutos().then(res => {
            ValidaServerest.validarBuscaDeProdutos(res)
        })
    })

    //POST/login(200)
    context('Logar com sucesso', () => {
        beforeEach('Logar', () => {
            Serverest.buscarUsuarioParaLogin()
            cy.get('@usuarioLogin').then(usuario => {
            Serverest.logar(usuario).then(res => {
                ValidaServerest.validarLoginComSucesso(res)
                Serverest.salvarBearer(res)
            })
        })
        })

        //POST/produtos(201)
        it('Deve postar um novo produto com sucesso', () => {
            Serverest.cadastrarProdutoComSucesso().then(res => {
                ValidaServerest.validarCadastroDeProdutoComSucesso(res)
            })
        })
    })
})
