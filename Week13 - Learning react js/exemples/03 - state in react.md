# State in react

## Hooks react

- hooks-rile se pot folosi doar in functional component
  Exemple: useState, useEffect, useRef

### useState

- sa facem un UI interactiv, user poate interactiona cu aplicatia nostra
- state este per componenta
- state este tinut in memoria javascript, daca facem refresh la pagina, se pierde
- orice componenta poate avea unul sau mai multe stari => puntem folosi useState de cate ori vream

Counter app

```jsx
import { useState } from "react";

const App = () => {
  const stateIncrement = useState(0); // primul parametru este valoare initiala
  const counter = stateIncrement[0]; // valoare currenta
  const setCounter = stateIncrement[1]; // functia care ne ajuta sa schimbam valoare de la counter

  // const [counter, setCounter] = useState(0)

  const handleClick = () => {
    console.log("sa dat click");
    setCounter(counter + 1);
    if (counter > 10) {
      console.log("sa executa daca counter > 10");
    }
  };

  return (
    <div>
      {/* de fiecare data cand se schimba valoare din counter , se face automat update in DOM */}
      <span>{counter}</span> 
      <button onClick={handleClick}>Increment </button>
    </div>
  );
};
```

### useEffect

- ne ajuta sa executam o functie callback daca se schimba props sau state-ul componenei
- useEffect se foloseste tot timpul cand avem de facut fetch api

Fetch next Todo app

```jsx
import { useState, useEffect } from "react";

const App = () => {
  const [todoId, setTodoId] = useState(0);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    // se executa prima data cand se randeaza componenta
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((todo) => {
        console.log(todo);
        setTodoTitle(todo.title);
      });
    console.log("execut logica daca se schimba counter");
  }, [todoId]);

  return (
    <div>
      <span>TodoId: {todoId}</span>
      <h1>Todo title: {todoTitle} </h1>
      <button onClick={() => setTodoId(todoId + 1)}>Fetch next Todo</button>
    </div>
  );
};
```
### Lifecycle cmps

- componentDidMount - Prima data dupa ce se afiseaza componenta in UI
```jsx
const App = () => {
  useEffect(() => {
    // se va executa doar odata. Prima data dupa ce se afiseaza componenta
  }, []);

  return <div>test</div>;
};
```

- componentWillUnmount

```jsx
const App = () => {
  useEffect(() => {
    // se va executa doar odata. Prima data dupa ce se afiseaza componenta

    return function () { // logica de clean - curatare
      // se executa inaite ca compoenta sa fie sterga din UI
    }
  }, []);

  return <div>test</div>;
};
```
- componentDidUpdate - de fiecare data cand se schimba ptops sau state

```jsx

const App = (props) => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    // se va executa daca oricare dintre ele se schimba

  }, [props.isOnline, counter]);

  return <div>test</div>;
};
```

