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

## 5. Components with props

## 6. Add click event
