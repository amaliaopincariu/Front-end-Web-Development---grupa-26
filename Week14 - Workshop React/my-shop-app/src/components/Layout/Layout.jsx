import './Layout.css';
import { Link } from "react-router-dom";

function Layout(props) {
  return (
    <div className='layout'>
      <header>
        <h1>My Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
              <Link to='/cart'>Cart ({props.itemsCount} items)</Link>
            </li>
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