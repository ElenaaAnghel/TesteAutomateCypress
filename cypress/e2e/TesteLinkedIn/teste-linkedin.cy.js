
describe('On LinkedIn', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('anghel.elena17@gmail.com');
        cy.get('#password').type('Anghel1147');
        cy.get('.btn__primary--large').click();
        cy.get('#ember16').should('exist');
    })  

})