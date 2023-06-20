# React Router

## Vad är React Router?

- Med hjälp av routing kan vi navigera mellan olika sidor i en webbapplikation
- **React Router** är ett bibliotek för att hantera routing i React

## Komma igång med React Router

- För att komma igång med React Router behöver vi installera biblioteket

```bash
npm install react-router-dom
```

- Exempel på React Router setup som använder `BrowserRouter`, 404-sida, ´Link`och Router params

```tsx

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Hem</Link>
                    </li>
                    <li>
                        <Link to="/om">Om</Link>
                    </li>
                    <li>
                        <Link to="/kontakt">Kontakt</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/user">
                    <UserListPage />
                </Route>
                <Route path="/user/:userId">
                    <SingleUserPage />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

const Home = () => {
    return (
        <h1>Hem</h1>
    )
}

const About = () => {
    return (
        <h1>Om</h1>
    )
}

const Contact = () => {
    return (
        <h1>Kontakt</h1>
    )
}

const NotFound = () => {
    return (
        <h1>404 - Sidan hittades inte</h1>
    )
}

```

## Router params

- För att använda router params behöver vi importera `useParams` från `react-router-dom`

```tsx
import { useParams } from 'react-router-dom'

const SingleUserPage = () => {
    const { userId } = useParams<{ userId: string }>()

    return (
        <div>
            <h1>Single user page</h1>
            <p>userId: {userId}</p>
        </div>
    )
}
```