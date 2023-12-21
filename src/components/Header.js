import React from 'react'
 
// import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
 
 import { toogleMenu } from './Utils/appslice';
 import { Link } from 'react-router-dom';

const Header = () => {
 


  const dispatch=useDispatch()
  const handlenavbar=()=>{
    dispatch(toogleMenu())

  }
   
  return (
    <div className='grid grid-flow-col px-5 py-2.5 shadow h-[70px] items-center' >
      <div className='flex col-span-1'> 
     <img className="  h-[55px] cursor-pointer" alt="logo"src="https://icons-for-free.com/iconfiles/png/512/menu+nav+navigation+icon-1320073183300645803.png" onClick={()=>handlenavbar()}/>
      <img  className=" w-[100px]  cursor-pointer h-[55px] mx-2" alt="logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/> 
      </div>
        <div  className="col-span-10 px-10"> 
        <input type="text"  className="w-1/2 h-[36px] border border-gray-200 py-2 px-6  rounded-l-full" placeholder=' Search'/>
        <button className="border border-gray-200 py-1 px-5 h-[36px] rounded-r-full bg-gray-100" >🔍</button>
        </div>
        
        <div className="col-span-1 ">
        <img  className='w-[30px]' alt="profilelogo"src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1445958546/patwp1xg9fiklvtkdyls.png"/> 
        {/* <FaUserCircle className="w-8 h-8 "/> */}
      </div>
        </div>
        


   
  )
}

export default Header
