/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('/')
});

describe('Cadastro de usuários', () => {
    
const usuarios = require('../../fixtures/usuarios.json');
usuarios.forEach(usuarios => {
    it(`registra novo usuário ${usuarios.nome}`, () => {
        cy.cadastro(usuarios.email, usuarios.username, usuarios.senha, usuarios.nome);
    });

    it('Verifica as mensagens de validação dos campos da tela de registro', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    });

    it('Verifica as mensagens de validação do campo email', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.get('input[formcontrolname="email"]').type('karoline');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    });

    it('Verifica as mensagens de validação do campo senha', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    });

    it('Verifica as mensagens de validação do campo userName', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Karoline');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    });
});
});