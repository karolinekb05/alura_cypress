/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('/')

    cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
        statusCode: 200
    }).as('stubPost')
});

describe('Login válido e login inválido', () => {
it('Login de usuário válido', () => {
    cy.login(Cypress.env('userName'), Cypress.env('password'));
    cy.wait('@stubPost');
    cy.contains('(Logout)').should('be.visible');
});

it('Login de usuário inválido', () => {
    cy.login('karoline', '123');
    cy.on('window:alert', (str) => {
        expect(str).to.equal('Invalid user name or password')
    })
});
});