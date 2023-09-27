# End-to-end-testning med Cypress

## Vad är end-to-end-testning?

- Testar olika användarflöden
- Ex.  
  - En användare loggar in
  - En användare skapar ett konto
  - En användare lägger till en produkt i varukorgen
- Utförs i en webbläsare
- Cypress utför klick, skriver text, navigerar, etc.

---

## Exempel, inloggningsformulär

- Skriv in användarnamn
- Skriv in lösenord
- Klicka på logga in
- Kontrollera att användaren är inloggad

---

## Inloggningsformulär, Cypress

```ts
describe('Login', () => {
    it('should login', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[name="username"]').type('test');
        cy.get('input[name="password"]').type('test');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/profile');
    });
});
```

---

## Vilka selektorer ska man använda?

- För att identifiera element kan man selektera på olika sätt
  - `cy.get('button')`
  - `cy.get('button[type="submit"]')`
  - `cy.get('button').contains('Logga in')`
  - `cy.get('button').contains(/logga in/i)`

För att testningen inte ska vara beroende av designen är det bra att använda selektorer som inte är beroende av designen.

T.ex. lägga till ett attribut som inte syns för användaren:

```html
<button data-testid="login-button">Logga in</button>
```

```ts
cy.get('[data-testid="login-button"]').click();
```

---

## Komma igång

- När cypress väl är installerat kan man få konfiguration och boilerplatekod genom att köra `npx cypress open`
- Konfigurationsfiler:
  - `cypress.json`
  - `cypress/plugins/index.js`
  - `cypress/support/index.js`