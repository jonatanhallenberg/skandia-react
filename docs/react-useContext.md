# useContext

## Vad är useContext?

`useContext` är en React hook som används för att dela data mellan komponenter. Det är en av de mest använda React hooksen.

## Exempel - UserContext

Vi ska skapa en `UserContext` som vi ska använda för att dela data mellan komponenter. Vi ska skapa en `UserContext` i `src/context/UserContext.js`.

```js
import { createContext } from 'react';

export const UserContext = createContext();
```

Vi ska sedan använda `UserContext` i `App.js`. Vi ska använda `useState` för att skapa en state-variabel `user`. Vi ska använda `setUser` för att uppdatera `user`.

```js
import { useState } from 'react';
import { UserContext } from './context/UserContext';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <h1>useContext</h1>
      </div>
    </UserContext.Provider>
  );
}

export default App;
```

Vi ska sedan använda `UserContext` i `src/components/Navbar.js`. Vi ska importera `UserContext` och använda `useContext` för att använda `UserContext`.

```js
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <h2>Navbar</h2>
      <p>{user ? user.name : 'No user'}</p>
    </nav>
  );
}

export default Navbar;
```

Vi ska sedan använda `UserContext` i `src/components/Login.js`. Vi ska importera `UserContext` och använda `useContext` för att använda `UserContext`.

```js
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const login = () => {
    setUser({ name: 'John' });
  }

  return (
    <div>
      <h2>Login</h2>
      <p>{user ? user.name : 'No user'}</p>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
```