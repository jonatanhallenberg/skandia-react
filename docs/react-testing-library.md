# React testing library

## Vad är React testing library?

- Ett bibliotek som används för att testa React-komponenter
- Kan användas för olika typer av test:
    - Unit test
    - Integration test
    - End-to-end test

*Vi kommer att fokusera på unit test*

## Varför React testing library?

- Enkelt att komma igång med
- Enkelt att skriva test
- Enkelt att läsa test

## Installationsguide - Vite

- Installera React testing library

```bash
npm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom ts-jest jest-environment-jsdom
```

- Lägg till jest.config.js:

```js
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};
```

- Lägg till test script i package.json:

```json
{
  "scripts": {
    ...
    "test": "jest"
    ...
  }
}
```

## Exempel

```tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
```

*Du kör enkelt test genom att skriva:*

```bash
npm test
```

## Vad gör koden ovan?

- ´screen´ är en global variabel som innehåller olika funktioner för att hitta element i DOM:en
- ´render´ renderar komponenten som skickas in som argument
- ´getByText´ letar upp ett element som innehåller texten som skickas in som argument

## Vanliga fuktioenr i React testing library

- ´getBy...´ kastar ett error om elementet inte hittas
- ´queryBy...´ returnerar null om elementet inte hittas
- ´findBy...´ returnerar ett promise som resolvar när elementet hittas
- Alla funktioner returnerar ett element om det hittas

## Snapshot testing

- Snapshot testing används för att testa att komponenter renderas som förväntat

```tsx
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
```

## Vad gör koden ovan?

- ´asFragment´ returnerar en snapshot av komponenten
- ´toMatchSnapshot´ jämför snapshoten med den senaste versionen av snapshoten
- Om snapshoten inte finns skapas en ny snapshot
- Om snapshoten finns jämförs den med den senaste versionen av snapshoten
- Om snapshoten inte stämmer överens med den senaste versionen av snapshoten kastas ett error
- Om snapshoten stämmer överens med den senaste versionen av snapshoten går testet igenom

## Snapshot-fil

- Snapshot spara som en fil i en mapp som heter ´__snapshots__´
- Denna ska commitas till git

Exempel på snapshot-fil:

```tsx
exports[`renders learn react link 1`] = `

<div>
  <a
    class="App-link"
    href="https://reactjs.org"
    rel="noopener noreferrer"
    target="_blank"
  >
    learn react
  </a>
</div>
    
    `;
```

