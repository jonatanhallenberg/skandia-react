# Redux

## Vad är Redux och varför behöver vi det?

- Redux är ett state management library
- Redux hjälper oss att hantera state i större applikationer
- Om man enbart använder useState och skickar data mellan olika komponenter med hjälp av props kan det bli väldigt rörigt

## Var är Redux Toolkit?

- Redux Toolkit är ett paket som förenklar användningen av Redux
- Bland annat använ

## Hur funkar Redux?

- Redux har ett state för hela appen
- För att ändra state i Redux behöver vi dispatcha en action
- En action är ett objekt som beskriver vad som ska hända
- En action har ett `type` och ett `payload`
- När vi dispatchar en action skickas den till en slice
- En slice är en del av state

## Komma igång med Redux / Redux Toolkit

- För att komma igång med Redux behöver vi installera biblioteket

```bash
npm install redux
```


