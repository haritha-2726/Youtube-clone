 
import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
 import { youtube_API_KEY } from './Constants'
 import VideoCard from './VideoCard'

 

const VideoList = () => {
  const [videos, setVideos] = useState([]);


 useEffect(()=>{
  getVideos();
 },[])

 const getVideos= async ()=>{
   const data =await fetch(youtube_API_KEY);
   const json= await data.json();
   setVideos(json.items);
  //  console.log(json)
 }
   
  return (
    <div className="flex flex-wrap items-center">
    {videos.map((video) => (
       <Link key={video.id}  to={"/watch?v="+video.id}><VideoCard  info={video}   />  </Link>
    ))}
  </div>
  )
}

export default VideoList
