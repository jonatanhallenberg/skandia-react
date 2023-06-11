# Typescript

## Vad är Typescript?

- Programmeringsspråk
- Lanserat 2012
- Open source
- Utvecklat av Microsoft

## JavaScript vs. Typescript

- TypeScript är Superset av JavaScript
  - All vanlig JavaScript fungerar
  - Plus ytterligare funktionalitet som t.ex. typning av variabler, funktioner och objekt
- Typescript kompileras till JavaScript
- Fel upptäcks **vid kompilering** istället för under **runtime** 
  
https://www.typescriptlang.org/play

## En första Typescript-fil

- Har filändelse .ts istället för .js

## Skapa projekt och kompilera

I en tom mapp:

1. npm init -y
2. npm install typescript --save-dev
3. npx tsc --init (Vilka filer skapas?)
4. Lägg till 'index.ts'
5. Kör ”npx tsc” för att kompilera koden - vad händer?

## tsconfig.json

- Konfiguration för hur typescript ska fungera
- Ligger i rotkatalogen för ett ts-projekt
- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Typescript i VS Code

- VS Code har stöd för Typescript
- Autocomplete
- Felmeddelanden
- Refactoring
- https://code.visualstudio.com/docs/typescript/typescript-tutorial

## Ange typ eller inte

- Att ange en typ är frivilligt
- Tilldelas ett värdet så får variabeln automatiskt värdets typ
- Detta kallas **type inference**

```typescript
const name = "John Doe"; // string
const age = 42; // number
const isAlive = true; // boolean
```

## Typning av variabler

- Variabler kan typas explicit
- Grundtyper: String, Number och Boolean
- Subtyper: null och undefined

```ts
const isStudent: boolean = true;
const startYear: number = 2021;
const firstname: string = "Jonatan";
```

## Typning av funktioner

- Parametrar och returvärden kan typas

```ts
const add = (a: number, b: number): number => {
  return a + b;
}
```

- **void** är typen på funktioner som inte returnerar något
- Valfria inparametrar kan anges med **?**

```ts
const sayHello = (name?: string): void => {
  console.log(`Hello ${name}`);
}
```

## Typning av objekt

- **type** används för att skapa en typ
- Den kan sedan appliceras på objekt
  
  ```ts
  type Person = {
    name: string;
    age: number;
  };

  const person: Person = {
    name: "John Doe",
    age: 42,
  };
  ```

- Även här kan **?** användas för att ange valfria egenskaper

  ```ts
  type Person = {
    name: string;
    age?: number;
  };
  ```

> Har du hört talas om interface och undrar vad skillnaden mellan type och interface är?
> Läs mer här: https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

  
## Typning av arrayer

- Arrayer kan typas på två sätt

```ts
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["John", "Jane"];
```

## any, null och undefined

- **any** kan användas för att skapa en variabel som kan ha vilken typ som helst
- **null** och **undefined** är subtyper till alla andra typer (det innebär att de kan tilldelas alla andra typer)

```ts
let x: any = 42;
x = "John Doe";
x = true;

let y: null = null;
let z: undefined = undefined;
```

## Enum

- Enum är en typ som kan användas för att skapa en uppräkning av värden
- Varje värde får ett index som börjar på 0
- Kan användas för att skapa en uppräkning av t.ex. veckodagar

```ts
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const today: Weekday = Weekday.Monday;
```

## Union type

- Tillåter mer än en typ för en variabel

```ts
let something: number | string | boolean;

something = 1; // ok
something = '1'; // ok
something = true; // ok
something = {}; // Error: Type '{}' is not assignable to type 'string | number | boolean'

```