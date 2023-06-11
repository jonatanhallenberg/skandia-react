# Repetitionsuppgifter inför React

Lös följande uppgifter. Använd t.ex. node-consolen (skriv *node* i en terminal) eller consolen i Chrome för att testa dig fram.

## Arrow functions

---

```js
function sum(a, b) {
    return a + b;
}
```

**1a) Skriv om funktionen sum till en arrow-function som använder return**

**1b) Skriv om funktionen sum till en arrow-function som inte använder return**


<details>
  <summary>Svar</summary>
  
```js
const sum = (a, b) => a + b; //utan return

const sum = (a, b) => { return a + b } //med return
```
</details>

---

**2) Skriv om funktionen getPerson till en arrow-funktion utan att använda return**

```js
function getPerson(firstnamn: string, lastname: string, birthyear: number) {
    return {
        firstname,
        lastname,
        birthyear
    }
}
```
<details>
  <summary>Svar</summary>
  
```js
// Viktigt med paranteser runt måsvingarna!!
const getPerson = (firstname: string, lastname: string, birthyear: string) => ({
    firstname, 
    lastname,
    birthyear
});
```
</details>

---

## Filter

Utgå ifrån följande lista med katter:

```js
const cats = [
    {
        "name": "Misse",
        "birthyear": 2020
    },
    {
        "name": "John",
        "birthyear": 2013
    },
    {
        "name": "Monica",
        "birthyear": 2017
    }
]
```

**4) Hämta ut alla katter som är födda 2017 eller senare**

<details>
  <summary>Svar</summary>

```js
cats.filter(cat => cat.birthyear >= 2017) 
```
</details>

---

**5) Hämta ut alla katter vars namn börjar på 'm' (case sensitive)**

<details>
    <summary>Svar</summary>

```js
cats.filter(cat => cat.name.toLowerCase().startsWith("m"))
```
</details>

---

## Map

*Fortsätt använda kattlistan.*

**6) Mappa om så att du får ut följande array:**

```js
[ "Misse är född 2020", "John är född 2013", "Monica är född 2017" ]
```

<details>
    <summary>Svar</summary>

```js
    cats.map(cat => `${cat.name} är född ${cat.birthyear}`)
```
</details>

---

## Sort

*Fortsätt använda kattlistan*

**7) Sortera kattlistan så att den äldsta katten kommer först och den yngsta sist**

<details>
    <summary>Svar</summary>

```js
    cats.sort((a, b) => a.birthyear - b.birthyear)
```
</details>

---

**8) Sortera kattlistan på namn i bokstavsordning från Ö-A**

<details>
    <summary>Svar</summary>

```js
    cats.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
```
</details>

---

## Destructing

*Fortsätt använda kattlistan*

**9) Hämta ut de tre katterna i arrayen i tre variabler: cat1, cat2 och cat3 med hjälp av destructing (en rad kod krävs)**

<details>
    <summary>Svar</summary>

```js
    [ cat1, cat2, cat3 ] = cats;
```
</details>

---

**10) Hämta ut name och birthyear för cat1 i egna variabler med hjälp av destructing (en rad kod krävs)**

<details>
    <summary>Svar</summary>

```js
    { name, birthyear } = cat1;
```
</details>

---

## Extra kluriga

**11) Skriv om nedanstående funktion så att *color* och *name* destructas från objectet cat i funktionens parameterlista**

```js
const logCat = (cat) => {
    console.log(`Det kom en ${cat.color} katt som hette ${cat.name}`)
}
//Exempelanrop
logCat({ "name": "Misse", "color": "svart"});
```

<details>
    <summary>Svar</summary>

```js
const logCat = ({ color, name }) => {
    console.log(`Det kom en ${color} katt som hette ${name}`)
}
//Exempelanrop
logCat({ "name": "Misse", "color": "svart"});
```
</details>

---

**12) Utgå ifrån kattlistan. Skriv på en rad kod så att vi får ut en sträng med en html-lista enligt nedanstående**

```html
<ul><li>Monica, 2017</li><li>Misse, 2020</li><li>John, 2013</li></ul>
```

<details>
    <summary>Svar</summary>

```js
'<ul>' + cats.map(cat => `<li>${cat.name}, ${cat.birthyear}</li>`).join("") + '</ul>'
````

</details>
