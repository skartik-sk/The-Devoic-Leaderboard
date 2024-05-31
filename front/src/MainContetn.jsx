import React from 'react'
import Tad from './tabs'

const MainContetn = ({data}) => {
  return (
    <div className=' h-[100vh] w-[100vh] '>
        <div  className='w-1/2'>
       <Tad data={data}/>
       </div>
    </div>
  )
}

export default MainContetn