# Custom hook

## Exempel på custom hooks

- Hämta data från ett API
- Hämta data från en cookie
- Hämta data från localStorage
- Hämta data från sessionStorage
- Hämta data från en databas

## Demo - useCookie

I denna övning ska vi bygga en custom hook som heter `useCookie`. Den ska användas för att spara och hämta data från en cookie.

### Steg 1 - Skapa en custom hook

Skapa en fil som heter `useCookie.ts` i din `src`-mapp. I denna fil ska vi skapa en custom hook som heter `useCookie`.

En custom hook är en funktion som börjar med `use` och som kan använda andra hooks inuti sig. I detta fall ska vi använda `useState` och `useEffect`.

```js
import { useState, useEffect } from 'react';

export const useCookie = () => {
  const [cookie, setCookie] = useState(null);

  useEffect(() => {
    // Hämta cookie
  }, []);

  return cookie;
};
```

### Steg 2 - Hämta cookie

I `useEffect` ska vi hämta cookie. Vi ska använda `document.cookie` för att hämta cookie. Detta är en sträng som ser ut såhär:

```js
"cookieName=cookieValue; expires=Thu, 18 Feb 2021 12:00:00 UTC; path=/"
```

Vi ska använda `split` för att dela upp strängen i en array. Vi ska använda `=` som separator. Vi ska sedan använda `map` för att skapa ett objekt av arrayen. Vi ska använda `trim` för att ta bort mellanslag.

```js
const cookieString = document.cookie;
const cookieArray = cookieString.split(';');
const cookieObject = cookieArray.map((cookie) => {
  const [key, value] = cookie.split('=');
  return {
    key: key.trim(),
    value: value.trim(),
  };
});
```

Vi ska sedan använda `find` för att hitta rätt cookie. Vi ska använda `cookieName` som vi skickar in i `useCookie` som argument.

```js
const cookieString = document.cookie;
const cookieArray = cookieString.split(';');

const cookieObject = cookieArray.map((cookie) => {
  const [key, value] = cookie.split('=');
  return {
    key: key.trim(),
    value: value.trim(),
  };
});

const cookie = cookieObject.find((cookie) => cookie.key === cookieName);
```

Vi ska sedan använda `setCookie` för att spara cookie i state.

```js
const cookieString = document.cookie;
const cookieArray = cookieString.split(';');

const cookieObject = cookieArray.map((cookie) => {
  const [key, value] = cookie.split('=');
  return {
    key: key.trim(),
    value: value.trim(),
  };
});

const cookie = cookieObject.find((cookie) => cookie.key === cookieName);

setCookie(cookie);
```

### Steg 3 - Använda custom hook

Nu ska vi använda vår custom hook. Vi ska använda den i `App.tsx`. Vi ska skicka in `cookieName` som argument.

```js
const cookie = useCookie('cookieName');
```

Vi ska sedan använda `cookie` i vår JSX.

```js
return (
  <div className="App">
    <h1>Cookie: {cookie}</h1>
  </div>
);
```