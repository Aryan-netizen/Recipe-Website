import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import MainLinks from './utils/MainLinks'


function App() {
  return (
    <div className='container mx-auto h-full w-full'>
      <Nav/>
      <MainLinks/>
    </div>
  )
}

export default App