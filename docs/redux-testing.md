# Testning av Redux

När man testar Redux kan man testa t.ex:

- Reducers / Actions
- Selectorer

## Reducers / Actions

Eftersom Reducer och Actions är vanliga funktioner som kan testas med vanliga enhetstester.

Testet sker i följande steg:

1. Vi utgår ifrån hur statet ser ut innan vi kör en action
2. Vi kör en action
3. Vi jämför hur statet ser ut efter att vi kört actionen med hur vi förväntar oss att statet ska se ut

### Exempel

```tsx
import { reducer, actions } from './todoSlice';

test('should add todo', () => {
    const state = {
        todos: [],
    };

    const action = actions.addTodo({
        id: 1,
        text: 'Todo 1',
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
        todos: [
            {
                id: 1,
                text: 'Todo 1',
            },
        ],
    });
});
```

## Selectorer

Selectorer är funktioner som tar in statet som argument och returnerar en del av statet.

### Exempel

Anta att vi har en selector som heter *getTodos* som returnerar en array med todos.

Den har följande kod:

```tsx
export const getTodos = (state) => state.todos;
```

Vi kan testa den med följande kod:

```tsx
import { getTodos } from './selectors';

test('should return todos', () => {
    const state = {
        todos: [
            {
                id: 1,
                text: 'Todo 1',
            },
        ],
    };

    const todos = getTodos(state);

    expect(todos).toEqual([
        {
            id: 1,
            text: 'Todo 1',
        },
    ]);
});
```
