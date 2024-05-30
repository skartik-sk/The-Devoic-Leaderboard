import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

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
    <div>
      //Todo: Add  code for ui
      {/* <div>{message}</div> */}
      {message.map((student) => (
        <div key={student._id}>
          <h2>{student.name}</h2>
          <p>{student.department}</p>
          <p>{student.total}</p> 
          <p>{student.subPointDistribution.Engagement}</p>
          <p>{student.subPointDistribution.Learning}</p>
          <p>{student.subPointDistribution.Project}</p>
          <p>{student.subPointDistribution.Additional}</p>
        </div>
      ))}
    </div>
      
    </>
  )
}

export default App
