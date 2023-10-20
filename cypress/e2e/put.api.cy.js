/// <reference types="cypress"/>

describe('Alterar Usuário', () => {

    const payload_cadastro_device = require ('../fixtures/cadastrar_usuario.json')

    it('Cadastrar usuário', () => {

        const body_cadastro = {
            "name": "morpheus",
            "job": "leader"
        }

        const body_update = {
            "name": "morpheus",
            "job": "zion resident"
        }
        

        cy.request({
            method: 'POST',
            url: '/users',
            failOnStatusCode: false,
            body: body_cadastro
        }).as('postResult')

            //pegando o result do cadastro
            //para pegar o id
        cy.get('@postResult').then((response) => {
            expect(response.status).equal(201) 
            expect(response.body.job).equal(body_cadastro.job)

            cy.request({
                method: 'PUT',
                url: `https://reqres.in/api/users/${response.body.id}`,
                failOnStatusCode: false,
                body: body_update
            }).as('putResult')

            //validações
        cy.get('@putResult').then((response_put) => {
            expect(response_put.status).equal(200) 
            expect(response_put.body.job).equal(body_update.job)
        })
    })
        })

    })
      
        
