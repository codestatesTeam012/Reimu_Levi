import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import {Home, Example, Login, Questions, Tags, Users, SignUp, Detail, Write} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/test" element={<Example />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
