# React - hämta och visa data

## Hur hämtar vi data från ett API?

- Vi använder funktionen `fetch` för att hämta data
- Vi använder funktionen `then` för att hantera svaret
- Vi använder funktionen `catch` för att hantera fel
- Vi använder funktionen `json` för att konvertera svaret till JSON

```jsx
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
```

## Hur visar vi data i en komponent?

- Vi använder `useState` för att spara data
- Vi använder `useEffect` för att hämta data
- Vi använder `map` för att skapa en lista av komponenter

```jsx
const App = () => {
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {todos.length <p>Inga todos</p>}
            {todos.map(todo => <p>{todo.title}</p>)}
        </div>
    )
}
```