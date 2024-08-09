import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import MainContetn from './MainContetn'
import Tad from './tabs'
import Loading from './Loading'

function App() {
  const [message, setMessage] = useState([])
  useEffect(() => {
    const getdata= async()=>{
      const data = axios.get('https://the-devoic-leaderboard.vercel.app/data')
    const response = await data
    console.log(response.data)
setMessage(response.data)
    }
    getdata()
  }, []) 

  return (
    <>
   {  message.length==0?<Loading/>:  <Tad data={message}/>
    }
    
    </>
  )
}

export default App
