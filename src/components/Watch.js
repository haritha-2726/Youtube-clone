import React, { useEffect } from 'react'
 
import { closeMenu } from './Utils/appslice'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Watch = () => {
  
  const dispatch=useDispatch()
  const [searchParams]=useSearchParams()
  console.log(searchParams.get("v"));
  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  
  return (
    <div className='p-3'>
      <iframe width="1000" 
      height="615" 
      src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?autoplay=1&mute=1"}
      title="YouTube video player" 
      // frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>   
      </iframe>
    </div>
  )
}

export default Watch
