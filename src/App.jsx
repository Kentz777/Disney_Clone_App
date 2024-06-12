import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header'
import Slider from './assets/components/Slider'
import ProductionHouse from './assets/components/ProductionHouse'
import GenreMovieList from './assets/components/GenreMovieList'
function App() {

  return (
  <div>
  <Header/>
  <Slider/>
  <ProductionHouse/>
 <GenreMovieList/>
  </div>
  )
}

export default App
