/// <reference types="cypress" />

// Expressão AAA: Arrange, Act, Assert
// Arrange: preparação do ambiente
// Act: ação que quero fazer
// Assert: o que quero verificar
describe('Alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://alura.com.br');
    });
    it('Buscar curso de Cypress', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Cypress');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should('contain', 'Curso Cypress: automação de testes E2E');
    });

    it.only('Buscar curso de JavaScript', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('JavaScript');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
        .should('contain', 'JavaScript');
    });
});