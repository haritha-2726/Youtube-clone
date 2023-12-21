import React from 'react'
import { useSelector } from "react-redux";
import {AiFillHome,AiFillYoutube,AiOutlineHistory,AiOutlineLike,AiOutlineShopping} from "react-icons/ai"
import {MdOutlineSubscriptions,MdOutlineVideoLibrary,MdOutlineWatchLater,MdOutlineVideoSettings} from "react-icons/md"
import {SiYoutubemusic,SiYoutubegaming} from "react-icons/si"
import {BiNews} from "react-icons/bi"
import { Link } from 'react-router-dom';



const SideBar = () => {
  const isOpen = useSelector((store) => store.app.isOpen);
  if (!isOpen) return null;
  return (
    <div className='p-4 flex flex-col border  shadow h-screen'>
        <ul className=" list-none p-2">
         <Link to="/"><li className='flex items-center  mb-2'> <AiFillHome className='mr-3 '/>HOME</li> </Link>
         <Link to={'/results?search_query=trending'}> <li className='flex items-center  mb-2'> <AiFillYoutube className='mr-3'/>Shorts</li></Link>
          <li className='flex items-center  mb-2'> <MdOutlineSubscriptions className='mr-3'/>Subscriptions</li>
          <li className='flex items-center  mb-2'> < SiYoutubemusic className='mr-3'/>Youtubemusic</li>
        </ul>
        <div className="border-t border-gray-300"></div>
        <ul className=" list-none p-2   ">
          <li className='flex items-center  mb-2'> <MdOutlineVideoLibrary className='mr-3'/>Library</li>
          <li className='flex items-center  mb-2'> <AiOutlineHistory className='mr-3'/>History</li>
          <li className='flex items-center  mb-2'> <MdOutlineVideoSettings className='mr-3'/>Your videos</li>
          <li className='flex items-center  mb-2'> <MdOutlineWatchLater className='mr-3'/>Watch later</li> 
        </ul>
        <div className="border-t border-gray-300"></div>
        <ul className=" list-none p-2">
          <li className='flex items-center  mb-2'> < AiOutlineLike className='mr-3'/>Liked videos</li>
          <li className='flex items-center  mb-2'> < AiOutlineShopping className='mr-3'/>Shopping</li>
          <li className='flex items-center  mb-2'> < BiNews className='mr-3'/> News</li>
          <li className='flex items-center  mb-2'> < SiYoutubegaming className='mr-3'/>Gaming</li> 
        </ul>
        <div className="border-t border-gray-300"></div>
        <ul className=" list-none p-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li> News</li>
          <li>Gaming</li> 
        </ul >
        <div className="border-t border-gray-300"></div>
        <ul className=" list-none p-2">
          <li>Trending</li>
          <li>Shopping</li>
          <li> News</li>
          <li>Gaming</li> 
        </ul>
    </div>
  )
}

export default SideBar
