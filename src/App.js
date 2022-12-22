import React from 'react'
import './App.css'
import Header from './components/home/header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePages from './components/pageContent/HomePages'
import Footer from './components/home/Footer'
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePages />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
