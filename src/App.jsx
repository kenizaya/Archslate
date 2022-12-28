import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SingleJobPage from './pages/SingleJobPage'
import Navbar from './components/Navbar'
import Tabs from './components/Tabs'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='*' element={<Tabs />} />
        <Route path='/job' element={<SingleJobPage />} />
      </Routes>
    </>
  )
}

export default App
