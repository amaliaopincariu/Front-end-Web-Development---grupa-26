import './style.css'
import getHomePage from './pages/getHomePage';
import { getAboutPage } from './pages/getAboutPage';
import { getLayout } from './getLayout';

const appHtmlDiv = document.querySelector('#app');
appHtmlDiv.innerHTML = getLayout();

const homeButton = document.querySelector('header nav ul li:first-child a');
const aboutButton = document.querySelector('header nav ul li:nth-child(2) a');
const mainContent = appHtmlDiv.querySelector('#app-main-content');

mainContent.innerHTML = getHomePage();

homeButton.addEventListener('click', () => {
  mainContent.innerHTML = getHomePage();
})
aboutButton.addEventListener('click', () => {
  mainContent.innerHTML = getAboutPage();
})

