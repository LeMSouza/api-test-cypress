/// <reference types="cypress"/>

describe('Buscar Usuários', () => {

    it('Buscar usuário especifico', () => {

        cy.request({
            method: 'GET',
            url: `/users/2`,
            failOnStatusCode: false
        }).as('getResult')

        //validações
        cy.get('@getResult')
            .then((response) => {
                expect(response.status).equal(200)
                expect(response.body).not.empty
                expect(response.body.data.id).equal(2)
                expect(response.body.data.email).equal('janet.weaver@reqres.in')
                expect(response.body.data.first_name).equal("Janet")
                expect(response.body.data.last_name).equal("Weaver")
        })
    })
})