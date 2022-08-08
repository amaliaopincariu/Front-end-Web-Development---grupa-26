import './App.css'

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

function App() {

  return (
    <div className="App">
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />

    </div>
  )
}

export default App
