import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'

// function App() {

//   return (
//     <Layout>
//       <HomePage />
//     </Layout>
//   )
// }
import { useState, useEffect } from "react";

const App = () => {
  const [todoId, setTodoId] = useState(0);
  const [todoTitle, setTodoTitle] = useState("");

  useEffect(() => {
    // se executa prima data cand se randeaza componenta
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(todo => {
        console.log(todo);
        setTodoTitle(todo.title);
      })
    console.log("execut logica daca se schimba counter");
  }, [todoId]);

  return (
    <div>
      <span>TodoId: {todoId}</span>
      <h1>Todo title: {todoTitle} </h1>
      <button onClick={() => setTodoId(todoId + 1)}>Fetch  next Todo</button>
    </div>
  );
};

export default App
