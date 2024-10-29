import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Number from './components/Number'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>     
      <Routes>
        <Route path='/state' element={<StateBasics/>}></Route>
        <Route path='/num' element={<Number/>}></Route>
        <Route path='/name' element={<Name/>}></Route>
      </Routes>
    </>
  )
}

export default App
