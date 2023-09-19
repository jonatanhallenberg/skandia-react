# Storybook

## Vad är Storybook?

- Storybook är ett verktyg för att bygga komponenter och deras olika tillstånd.

## Komma igång ( Storybook + Vite )

- Instruktioner för att skapa ett fristående komponentbibliotek:
  - https://prateeksurana.me/blog/react-component-library-using-storybook-7/

- Instruktioner för att lägga till befintligt Vite-projekt:
  - https://storybook.js.org/docs/react/builders/vite

## En första **Story**

- Skapa en story i `src/stories/` med namnet `Button.stories.jsx`
- Skapa en story med följande innehåll:

```jsx
import React from "react";

import { Button } from "../components/Button";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Button",
};
```

- Starta storybook med `npm run storybook`

