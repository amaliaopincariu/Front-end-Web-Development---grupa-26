import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'

function App() {

  return (
    <Layout>
      <HomePage />
      <AboutPage />
    </Layout>
  )
}


export default App
