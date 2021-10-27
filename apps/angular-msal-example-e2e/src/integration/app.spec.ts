import { getGreeting } from '../support/app.po';

describe('angular-msal-example', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Angular MSAL Sample');
  });

  it('should display user data', () => {
    cy.visit('/#/profile')
      .fixture('user.json')
      .then((expectedUser) =>
        cy
          .get('[data-cy="firstName"]')
          .should('have.text', `First Name: ${expectedUser.firstName}`)
          .get('[data-cy="lastName"]')
          .should('have.text', `Last Name: ${expectedUser.lastName}`)
          .get('[data-cy="email"]')
          .should('have.text', `Email: ${expectedUser.email}`)
          .get('[data-cy="id"]')
          .should('have.text', `Id: ${expectedUser.id}`)
      );
  });
});
