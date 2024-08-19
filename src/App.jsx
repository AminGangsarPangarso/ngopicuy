

import './App.css'
import {Routes, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
function App() {


  return (
    <>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage */}
    </Routes>
    
    </>
  )
}

export default App
