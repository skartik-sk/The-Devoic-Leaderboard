import React from 'react'
import Tad from './tabs'

const MainContetn = ({data}) => {
  return (
    <div className=' h-[100vh] w-[100vh]  '>
       

       <Tad data={data}/>
     
    </div>
  )
}

export default MainContetn