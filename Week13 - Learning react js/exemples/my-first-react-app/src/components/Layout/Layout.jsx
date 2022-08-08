import './Layout.css';

function Layout(props) {
  return (
    <div className='layout'>
      <header>
        <h1>My Personal Page</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
      <main id="app-main-content">
        {props.children}
      </main>
    </div>
  )
}
export default Layout;