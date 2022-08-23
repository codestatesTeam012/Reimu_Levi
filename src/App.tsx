import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Example} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Example />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
