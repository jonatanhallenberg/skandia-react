# Förberedande JS / TS inför React

## Arrow functions

- Nyare sätt att skriva funktioner i JavaScript

```js
// Vanlig funktion
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
}

// Arrow function utan return
const add = (a, b) => a + b;
```

## Filter

- Filter används för att filtrera ut värden från en array
- Filter tar en funktion som argument
- Funktionen som skickas in måste returnera true eller false
  - Om funktionen returnerar true så läggs värdet till i den nya arrayen
  - Om funktionen returnerar false så läggs värdet inte till i den nya arrayen
- Funktionen som skickas in till filter kallas för en **callback**-funktion
- Callback-funktioner är väldigt vanliga i JavaScript

```typescript
const members = ["John", "Jane", "Bob", "Alice"];

const membersWithJ = members.filter((member) => member.startsWith("J"));

console.log(membersWithJ); // ["John", "Jane"]
```

## Map

- Map används för att skapa en ny array med nya värden
- Map tar en funktion som argument - en **callback**-funktion
- Funktionen som skickas in måste returnera ett värde
- Värdet som returneras läggs till i den nya arrayen

> Kom ihåg att den nya arrayen efter en map alltid har **lika många** värden som den gamla arrayen

```typescript

const members = ["John", "Jane", "Bob", "Alice"];

const membersWithJ = members.map((member) => member.toUpperCase());

console.log(membersWithJ); // ["JOHN", "JANE", "BOB", "ALICE"]
```

## Sort

- Sort används för att sortera en array
- Sort tar en funktion som argument - en **callback**-funktion
- Funktionen som skickas in måste returnera ett värde
- Om värdet är mindre än 0 så läggs värdet till före det andra värdet
- Om värdet är större än 0 så läggs värdet till efter det andra värdet

```typescript

const members = ["John", "Jane", "Bob", "Alice"];

const membersWithJ = members.sort((a, b) => a.localeCompare(b));

console.log(membersWithJ); // ["Alice", "Bob", "Jane", "John"]
```

## Destructing

- Används för att plocka ut värden från ett objekt eller en array
- Skrivs med måsvingar: `{}` för objekt och `[]` för arrayer


```typescript
//Destructing av objekt
const person = {
  name: "John",
  age: 42,
  isAlive: true,
};

const { name, age } = person;

console.log(name); // "John"

//Destructing av array
const members = ["John", "Jane", "Bob", "Alice"];

const [first, second] = members;

console.log(first); // "John"
```


## Template strings

- Används för att skapa strängar
- Skrivs med backticks: `` ` ` ``
- Kan innehålla variabler och uttryck

```typescript
const name = "John";
const age = 42;

const person = `My name is ${name} and I am ${age} years old`;

console.log(person); // "My name is John and I am 42 years old"
```