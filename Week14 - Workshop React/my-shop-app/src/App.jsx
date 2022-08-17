import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}


export default App
