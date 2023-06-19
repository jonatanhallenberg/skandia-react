# useForm / react-hook-form

# Vad är react-hook-form?

- react-hook-form är ett bibliotek för att hantera formulär i React
- Det är ett bibliotek som är väldigt lätt att komma igång med

# Kom igång med react-hook-form

- För att komma igång med react-hook-form behöver vi installera biblioteket

```bash
npm install react-hook-form
```

- För att använda react-hook-form behöver vi importera `useForm` från biblioteket

```jsx
import { useForm } from 'react-hook-form'
```

- För att använda react-hook-form behöver vi skapa ett formulär med `useForm`

```tsx

type FormValues = {
    name: string
    email: string
    password: string
}

const { register, handleSubmit } = useForm<FormValues>()

const onSubmit = (data) => {
    alert(JSON.stringify(data))
}

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" { ...register("name") } />
        <input type="text" name="email" { ...register("email") } />
        <input type="password" name="password" { ...register("password") } />
        <button type="submit">Skicka</button>
    </form>
)
```

## Registrera required

- För att registrera required kan vi använda `required: true`

```tsx
<input type="text" name="name" { ...register("name", { required: true }) } />
```

## Registrera minLength

- För att registrera minLength kan vi använda `minLength: 2`

```tsx

<input type="text" name="name" { ...register("name", { minLength: 2 }) } />
```

## Visa upp errors

- För att visa upp errors kan vi använda `errors.name?.type === 'required'`

```tsx

<input type="text" name="name" { ...register("name", { required: true }) } />
{ errors.name?.type === 'required' && <p>Namn är obligatoriskt</p> }
```

## Watch

- För att fånga upp när ett fält ändras kan vi använda `watch`

```tsx

const { register, handleSubmit, watch } = useForm<FormValues>()

const name = watch('name')

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        Värdet på namn: {name}
        <input type="text" name="name" { ...register("name") } />
        <input type="text" name="email" { ...register("email") } />
        <input type="password" name="password" { ...register("password") } />
        <button type="submit">Skicka</button>
    </form>
)
```