/// <reference types="cypress"/>

describe('Deletar Usuário', () => {

    it('Cadastrar usuário', () => {

        const body = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request({
            method: 'POST',
            url: '/users',
            failOnStatusCode: false,
            body: body
        }).as('postResult')

            //pegando o result do cadastro
            //para pegar o id
        cy.get('@postResult').then((response) => {
            expect(response.status).equal(201)  

            cy.request({
                method: 'DELETE',
                url: `/users/${response.body.id}`,
                failOnStatusCode: false,
            }).as('deleteResult')

            //validações
        cy.get('@deleteResult').then((response_del) => {
            expect(response_del.status).equal(204) 
        })
    })
        
})           

    })
      
        
