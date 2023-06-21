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
- Den lägger vi runt App i main.tsx

```tsx

import { Provider } from 'react-redux'
import store from './store'

...
<Provider store={store}>
      <App />
</Provider>
```

- Exempel på Redux Toolkit setup som använder `createSlice` och `createAsyncThunk`

```tsx
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
}

export const loadData = createAsyncThunk(
  'counter/loadData',
  async (input, thunkAPI) => {
    const response = await loadData();
    return response;
  }
)

const initialState = { value: 0 } as CounterState

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      state.value = action.payload
    })
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

## Typa statet

- För att typa statet behöver vi skapa en `RootState` som innehåller alla slices
- Vi behöver dessutom skapa useAppDispatch samt useAppSelector som är useDispatch respektive useSelector fast typade efter vårt state

https://redux-toolkit.js.org/usage/usage-with-typescript

## Dispatcha en action i en komponent

- För att dispatcha en action behöver vi använda useAppDispatch

```tsx

import { useAppDispatch } from './store'

const dispatch = useAppDispatch()

dispatch(increment())
```

## Hämta data från statet i en komponent

- För att hämta data från statet behöver vi använda useAppSelector

```tsx

import { useAppSelector } from './store'

const counter = useAppSelector((state) => state.counter.value)
```

