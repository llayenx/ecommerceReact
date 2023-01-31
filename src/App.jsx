import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


import Purchases from './pages/Purchases'
import Login from './pages/Login'
import { HashRouter, Routes, Route } from "react-router-dom"
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProductsDetail from './pages/ProductsDetail'
import Products from './pages/Products'
import { Container } from 'react-bootstrap'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  const isLoading = useSelector(state => state.isLoading)


  return (

    <HashRouter>

      <AppNavbar />
      {isLoading && <LoadingScreen />}

      <Container className='my-5'>
        
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductsDetail />} />
         
          <Route path="/login" element={<Login />} />

          <Route element ={<ProtectedRoutes/>} >
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </Container>
    </HashRouter>

  )
}

export default App
