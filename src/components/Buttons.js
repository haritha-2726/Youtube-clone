
import React, { useState } from 'react'
// import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
// import { Link } from 'react-router-dom'

const buttonsList=[
  "All",
  "Music",
  "Mixes",
  "Spice",
  "Mantras",
  "New to you",
  "Sports",
  "Recently uploaded",
  "Forumla 1",
  "Pop music",
  "Watched",
  // "Movies",
  // "Commedy",
  // "Game shows",
  // "Live",
  // "meditation music",
  // "Eating"

]




 
const Buttons = () => {
  const[activeElement,setActiveElement]=useState()
  

  const handleevent=value=>{
    setActiveElement(value)
  }

   
  return (
    
     <div className='flex flex-row   whitespace-nowrap  overflow '>
      
       {buttonsList.map((value,i)=>(
        <div className='bg-gray-100  hover:bg-gray-200 rounded-lg inline-block p-2 m-2 cursor-pointer'>
          <span key={i} className={activeElement===value?" bg-black text-white":""}
          onClick={()=>handleevent(value)}
          >
          {value}
          </span>
          </div>
           
       ))}
     </div>
    
  )
}

export default Buttons
