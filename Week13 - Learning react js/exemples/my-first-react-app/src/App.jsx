import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    console.log('go to page named: ', page)
    setCurrentPage(page);
  }

  return (
    <Layout onPageChange={handlePageChange}>
      { currentPage === 'home' ? <HomePage /> : <AboutPage /> }
    </Layout>
  )
}


export default App
