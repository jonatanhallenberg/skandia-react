# Animationer i React - en översikt

Det finns olika sätt att skapa animationer i React. Vi ska titta på några olika sätt att skapa animationer i React.

- CSS Transition (vanlig CSS)
- React Transition Group - React bibliotek
- React Spring - React bibliotek
- Framer Motion - React bibliotek

## React Transition Group - kodexempel

Vi ska skapa en enkel animation med React Transition Group. Vi ska skapa en komponent `src/components/TransitionGroup.js`.

```js
import { useState } from 'react';

const TransitionGroup = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="transition-group">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <div className="box"></div>}
    </div>
  );
}

export default TransitionGroup;
```

Vi ska sedan skapa en CSS-fil `src/components/TransitionGroup.css`.

```css
.transition-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Vi ska sedan installera React Transition Group.

```bash
npm install react-transition-group
```

Vi ska sedan importera `CSSTransition` och `TransitionGroup` i `src/components/TransitionGroup.js`.

```js
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TransitionGroup = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="transition-group">
      <button onClick={() => setShow(!show)}>Toggle</button>
      <TransitionGroup>
        {show && (
          <CSSTransition timeout={1000} classNames="box">
            <div className="box"></div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default TransitionGroup;
```

Vi ska sedan uppdatera CSS-filen `src/components/TransitionGroup.css`.

```css
.transition-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-enter {
  width: 100px;
  height: 100px;
  background-color: red;
}

.box-enter-active {
  width: 200px;
  transition: width 1s ease-in-out;
}
```