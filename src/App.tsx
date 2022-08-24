import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import {Home, Example} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Example />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
