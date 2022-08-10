# Components

## 4. Components - functie/class

### Function component

O functie de javascript care returneaza jsx, este o componenta react

```jsx
function BlogPost() {
  console.log("test");
  return (
    <div className="post">
      <h1>First post</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quidem.
      </p>
    </div>
  );
}

// componenta principala
function App() {
  const myNum = 12312;
  return (
    <div className="main-cmp">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      {1 + 34 + myNum}
    </div>
  );
}
// 2. Afisare in DOM
const container = document.querySelector("#app");
const root = createRoot(container);
root.render(<App />);
```

### Class component

- facem mostenire din React.Component
- trebuie obligatoriu sa avem o metoda render care returneaza "html" ( jsx )

```jsx
import React from "react";

class BlogPost extends React.Component {
  render() {
    return (
      <div className="post">
        <h1>First post</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
      </div>
    );
  }
}

const App = () => (
  <div>
    <BlogPost />
    <BlogPost />
    <BlogPost />
  </div>
);
```

## 5. Components with props

```js
function showName(name) {
  console.log("Hello " + name);
}
showName("Alex");
showName("Andreea");
```

- Ce sunt props?
  - Sunt la fel ca parametri unei functii
  - punem trimite props prin atribute cand folosim componenta

```jsx
const BlogPost = (props) => (
  <div className="post">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

const App = () => (
  <div className="my-app" data-id="1" curs-super="true">
    <BlogPost
      title="First post"
      content=" Lorem ipsum dolor sit amet consectetur adipisi"
    />
    <BlogPost title="Second post" content=" tare tare ......" />
    <BlogPost title="Tare post" content="Continut diferit" />
  </div>
);
```

## 6. Add click event

- pana acum foloseam addEventListener

```js
const div = document.createElement("div");
div.addEventListener("click", function (event) {
  console.log("sa dat click");
});
```

- Se folosesc atribute pentru a inregistra eventurile
  Ex: onClick, onFocus, onMouseUp, onKeyDown, onScroll

```jsx
const App = () => {
  const handleClick = (event) => {
    console.log("Sa dat click", event);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };

  return (
    <div>
      <button onClick={handleClick} onKeyDown={handleKeyDown}>
        Trimite
      </button>
    </div>
  );
};
```

### Click on BlogPost
 - nu putem pune onClick pe o componenta React fara sa legam acest onClick de un element nativ din DOM
```jsx
const BlogPost = (props) => (
  <div
    className="post"
    onClick={() => {
      console.log("Suntem in componenta BlogPost - sa dat click", props);
      if (props.onPostClick) { // apelam onPostClick doar daca exista
        props.onPostClick();
      }
    }}
  >
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
);

const App = () => {
  const handleClickOnPost = () => {
    console.log("sa dat click pe post");
  };
  return (
    <div className="my-app" data-id="1" curs-super="true">
      <BlogPost
        title="First post"
        onPostClick={() => { // callback function
          console.log('Suntem in App cmp - click pe post primul post');
        }}
        content=" Lorem ipsum dolor sit amet consectetur adipisi"
        id={10}
        isBigger={true}
      />
      <BlogPost title="Second post" content=" tare tare ......" />
      {/* Second post nu are onPostClick*/}
      <BlogPost title="Tare post" content="Continut diferit" onPostClick={() => {
        console.log('Suntem in App cmp - click pe post ultimul post');
      }} />
    </div>
  );
};
```
