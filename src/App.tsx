import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header/Header'
import {Home, Example} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Example />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
