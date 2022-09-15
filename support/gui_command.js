Cypress.Commands.add('login', (username, senha) => {
    cy.get('input[formcontrolname="userName"]').type(username);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('cadastro', (email, username, senha, nome) => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="userName"]').type(username);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('input[formcontrolname="fullName"').type(nome);
    cy.contains('button', 'Register').click();
}) 