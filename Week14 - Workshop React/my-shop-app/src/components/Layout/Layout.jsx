import './Layout.css';

function Layout(props) {
  return (
    <div className='layout'>
      <header>
        <h1>My Personal Page</h1>
        <nav>
          <ul>
            <li onClick={
              function () {
                console.log('Sa dat click pe home')
                props.onPageChange('home')
              }
            }><a href="#">Home</a></li>
            <li onClick={
              function () {
                console.log('Sa dat click pe About')
                props.onPageChange('about')
              }
            }><a href="#">About</a></li>
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