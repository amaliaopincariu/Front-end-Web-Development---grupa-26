# 0. What is React Js? Why we need it?

- React se bazeaza pe componente pentru a construi interfata web
- O componenta este defapt o functie care afiseaza o parte din UI ( user interface)
- De ce facem componente? Pentru ca este foarte usor sa refolosim
- React este declarativ cu ajutorul componentelor

# 1. Hello world - React vs DOM

```html
<div>Hello world</div>
```

## Cu DOM

```js
// 1. Create in memoria js a elementului
const helloWorld = document.createElement("div");
helloWorld.innerText = "Hello world"; // children la div

// 2. Afisare elementului in pagina
const container = document.querySelector("#app");
container.appendChild(helloWorld);
```

## Cu React

```js
import React from "react";
import { createRoot } from "react-dom/client";

// 1. Create in memoria js a elementului
const helloWorld = React.createElement("div", null, "Hello World");

// 2. Afisare elementului in pagina
const container = document.querySelector("#app");
const root = createRoot(container);
root.render(helloWorld);
```

# 2. Post - title and content

```html
<div class="post" data="1">
  <h1>First post</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
  </p>
</div>
```

## Fara jsx

```js
import React from "react";

// 1. Create in memoria js a elementului

const post1Title = React.createElement("h1", null, "First post");
const post1Content = React.createElement(
  "p",
  null,
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
);
const post1 = React.createElement(
  "div",
  { className: "post", data: "1" },
  post1Title,
  post1Content
);

// 2. Afisare elementului in pagina
// ramane la fel
root.render(post1);
```

## Cu jsx
Html in javascript
Exista tool-uri care fac conversia din jsx in js
```jsx
// 1. Create in memoria js a elementului

const post1 = (
  <div className="post" data="1">
    <h1>First post</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
  </div>
)

// 2. Afisare elementului in pagina
// ramane la fel
root.render(post1);

```
