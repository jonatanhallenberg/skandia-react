# Redux

## Vad är Redux och varför behöver vi det?

- Redux är ett state management library
- Redux hjälper oss att hantera state i större applikationer
- Om man enbart använder useState och skickar data mellan olika komponenter med hjälp av props kan det bli väldigt rörigt


## Hur funkar Redux?

- Redux har ett state för hela appen
- För att ändra state i Redux behöver vi dispatcha en action
- En action är ett objekt som beskriver vad som ska hända
- En action har ett `type` och ett `payload` vilket är den data som ska uppdatera state
- När vi dispatchar en action skickas den till en slice
- I en slice finns en reducer som uppdaterar state

## Komma igång med Redux / Redux Toolkit

- För att komma igång med Redux / Redux Toolkit behöver vi installera biblioteken

```bash
npm install redux react-redux
npm install @reduxjs/toolkit
```

- För att använda Redux / Redux Toolkit behöver vi skapa en store

```tsx
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        // Här lägger vi till våra slices
    }
})
```

- För att använda Redux / Redux Toolkit behöver vi wrappa vår app i en `Provider`

```tsx

import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <h1>Min app</h1>
        </Provider>
    )
}
```

- Exempel på Redux Toolkit setup som använder `createSlice` och `createAsyncThunk`

```tsx

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

