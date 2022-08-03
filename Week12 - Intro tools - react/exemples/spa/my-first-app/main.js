import './style.css'

const appHtmlDiv = document.querySelector('#app');
appHtmlDiv.innerHTML = `
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
  </main>
`;

const homeButton = document.querySelector('header nav ul li:first-child a');
const aboutButton = document.querySelector('header nav ul li:nth-child(2) a');
const mainContent = appHtmlDiv.querySelector('#app-main-content');

const homeContent = `
<h2>Home page</h2>

<p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>

`

mainContent.innerHTML = homeContent;

homeButton.addEventListener('click', () => {
  mainContent.innerHTML = homeContent;
})
aboutButton.addEventListener('click', () => {
  mainContent.innerHTML = `
  <h2>About page</h2>
   <p>My phone is 056756756</p>
  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  <p>lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
  `;
})


