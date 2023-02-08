import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import ApiCall from './screens/ApiCall'

function App() {
  useEffect(() => {
    
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/show-data' element={<ApiCall/>} />
      </Routes>
    </div>
  )
}

export default App
