import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import MainContetn from './MainContetn'

function App() {
  const [message, setMessage] = useState([])
  useEffect(() => {
    const getdata= async()=>{
      const data = axios.get('http://localhost:3000/data')
    const response = await data
setMessage(response.data)
    }
    getdata()
  }, []) 

  return (
    <>
    <MainContetn data= {message}/>
      
    </>
  )
}

export default App
