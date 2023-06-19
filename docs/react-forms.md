# React - formulär

## Koppla textbox till statet

- Vi kan koppla en textbox till statet med hjälp av `value` och `onChange`
- `value` anger vad som ska visas i textboxen
- `onChange` anger vad som ska hända när värdet ändras
- Vi kan använda `useState` för att skapa statet

```jsx
const App = () => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>{text}</p>
        </div>
    )
}
```

## Andra typer av formulärelement

- Vissa element skiljer sig i hur man fångar upp värdet med onChange, t.ex:
  - `<input type="checkbox" />`
  - `<input type="radio" />`
  - `<select />`
  - `<textarea />`
  - `<input type="file" />`
- Exempel på hur man använder dessa:

```jsx
const App = () => {
    const [text, setText] = useState('')
    const [checked, setChecked] = useState(false)
    const [selected, setSelected] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleCheckedChange = (e) => {
        setChecked(e.target.checked)
    }

    const handleSelectedChange = (e) => {
        setSelected(e.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleTextChange} />
            <p>{text}</p>

            <input type="checkbox" checked={checked} onChange={handleCheckedChange} />
            <p>{checked ? 'Checked' : 'Not checked'}</p>

            <select value={selected} onChange={handleSelectedChange}>
                <option value="1">Alternativ 1</option>
                <option value="2">Alternativ 2</option>
                <option value="3">Alternativ 3</option>
            </select>
            <p>{selected}</p>
        </div>
    )
}
```

## Skicka formulär

- För att skicka ett formulär kan vi använda `<form />` och `<button type="submit" />`
- Vi kan använda `onSubmit` för att fånga upp när formuläret skickas
- Vi kan använda `preventDefault` för att förhindra att sidan laddas om

```jsx
const App = () => {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(text)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit">Skicka</button>
            </form>
        </div>
    )
}
```

## Flera fält i formulär

- När man har flera fält i formulär kan det bli mycket kod eftersom varje fält behöver en egen `useState` och `onChange`
- Man kan använda `name` för att identifiera vilket fält som ändras
- Samt skapa en generisk `handleChange` som kan hantera alla fält

```jsx
const App = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(JSON.stringify(form))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
                <input type="email" name="email" value={form.email} onChange={handleChange} />
                <input type="password" name="password" value={form.password} onChange={handleChange} />
                <button type="submit">Skicka</button>
            </form>
        </div>
    )
}
```

## Validering

- Att ha en användarvänlig validering är viktigt för att användaren ska förstå vad som förväntas av den