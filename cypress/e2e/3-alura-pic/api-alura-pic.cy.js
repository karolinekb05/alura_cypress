describe('Buscar fotos e dados', () => {
    it('Buscar fotos da karoline', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/karoline/photos/'
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Vermelho')
        })
    });

    it('Fazer login da karoline', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/karoline/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal("karoline@mail.com")
        })
    });
});