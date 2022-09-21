
export default class ValidaServerest {

    // Validações das ações que podemos realizar na API
    // Validar a buscar de usuarios
    // Validar o Cadastro de novos usuarios
    // Validar o Login 
    
    static validarBuscaDeUsuarios(resposta) {
        //expect(resposta).to.be.a('object')
        //expect(resposta.body).exist
        //expect(resposta.body.quantidade).exist
        //expect(resposta.body.usuarios).exist
        //expect(resposta.body.quantidade).to.be.a('number')
        //expect(resposta.body).to.have.property('usuarios')
        //expect(resposta.body.usuarios).to.be.a('array')
        //let usuarios = resposta.body.usuarios
        //for(let each in usuarios){
        //    expect(usuarios[each]).to.have.property('nome')
        //    expect(usuarios[each].nome).to.be.a('string')
        //    expect(usuarios[each]).to.have.property('email')
        //    expect(usuarios[each].email).to.be.a('string')
        //    expect(usuarios[each]).to.have.property('password')
        //    expect(usuarios[each].password).to.be.a('string')
        //    expect(usuarios[each]).to.have.property('administrador')
        //    expect(usuarios[each].administrador).to.be.a('string')
        //    expect(usuarios[each]).to.have.property('_id')
        //    expect(usuarios[each]._id).to.be.a('string')
        //}
        expect(resposta.body.quantidade).to.be.greaterThan(10)
    }
    
    static validarLoginComSucesso(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('authorization')
    }

    // Produtos //

    static validarBuscaDeProdutos(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('nome')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('preco')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('descricao')
    }

    static validarCadastroDeProdutoComSucesso(resposta) {
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
        expect(resposta.body).to.haveOwnProperty('_id')
    }
}