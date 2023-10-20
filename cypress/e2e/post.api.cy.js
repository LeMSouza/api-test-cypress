/// <reference types="cypress"/>

describe('Cadastrar Usuários', () => {

    const payload_cadastro_device = require ('../fixtures/cadastrar_usuario.json')

    it('Cadastrar usuário', () => {

        const dataAtual = new Date().toISOString().slice(0, 10)

        cy.CadastrarUsuario(payload_cadastro_device)
        .then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal('morpheus')
            expect(response.body.job).equal('leader')
            expect(response.body.id).not.empty
            expect(response.body.createdAt).not.empty
            expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)     
        })
    })

    /*it('Cadastrar usuário sem enviar dados', () => {

        //cy.request({
            method: 'POST',
            url: '/users',
            failOnStatusCode: false,
            body: ''
        }).as('postResult')

        //validações
        cy.get('@postResult').then((response) => {
            expect(response.status).equal(404)
            expect(response.body.error).equal("Failed to load resource: the server responded with a status of 404 (Not Found)")
    })*/
})