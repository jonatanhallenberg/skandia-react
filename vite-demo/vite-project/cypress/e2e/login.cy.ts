describe('Login', () => {
  it('should login', () => {
      cy.visit('http://localhost:5173/login');
      cy.get('input[data-testid="usertype-customer"]').click();
      cy.get('input[data-testid="username"]').type('test');
      cy.get('input[data-testid="password"]').type('test');
      
      cy.get('button[data-testid="login-button"]').click();
      cy.url().should('include', '/profile');
  });
});