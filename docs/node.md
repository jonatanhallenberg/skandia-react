# Node

## Vad är Node?

- JavaScript-runtime som körs på servern.
- Byggt på Chrome V8 JavaScript Engine.
- Asynkront och eventbaserat.
- Enkelt att komma igång med.

## Installera Node.JS på Windows

1. Gå till [nodejs.org](https://nodejs.org/en/download/) och ladda ner den senaste LTS-versionen.
2. Kör installationsprogrammet och följ instruktionerna.
3. Öppna en terminal och skriv `node -v` för att verifiera att installationen lyckades.
4. Skriv `npm -v` för att verifiera att npm installerades korrekt.
5. Klart!

## package.json

- `package.json` är en fil som innehåller information om ett npm-paket.
- Den innehåller bland annat namn, version, licens, beroenden och kommandon.

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "John Doe",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

## node_modules

- `node_modules` är en mapp som innehåller alla beroenden som ett npm-paket har.

## Kommandon

- `npm init` skapar en `package.json`-fil.
- `npm install` installerar alla beroenden som finns i `package.json`.
- `npm install <paket>` installerar ett npm-paket.
- `npm install <paket> --save-dev` installerar ett npm-paket och lägger till det i `package.json` under `devDependencies`.

## Övning

1. Installera VSCode (om du inte redan har det)
2. Installera NodeJS (om du inte redan har det)
3. Skapa en mapp för ditt projekt
4. Öppna mappen i VSCode
5. Initiera ett npm-projekt med `npm init` - svara på frågorna

> Vilka filer skapades?

6. Lägg till raden "type: module" i `package.json`
7. Skapa en fil som heter `index.js`
8. Installera paketet `chalk` med `npm install chalk`
9.  Skriv följande kod i `index.js`:

```javascript
const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));
```

10. Kör `node index.js` i terminalen

> Vad händer?