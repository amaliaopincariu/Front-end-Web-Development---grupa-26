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
        onPostClick={() => {
          console.log('Suntem in App cmp - click pe post primul post');
        }}
        content=" Lorem ipsum dolor sit amet consectetur adipisi"
      />
      <BlogPost title="Second post" content=" tare tare ......" />
      {/* Second post nu are onPostClick*/}
      <BlogPost title="Tare post" content="Continut diferit" onPostClick={() => {
        console.log('Suntem in App cmp - click pe post ultimul post');
      }} />
    </div>
  );
};

export default App
