import React from "react";
import { FaUserCircle } from "react-icons/fa";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt,channelInfo } = snippet;

  return (
    <div className=" hover:border-gray-300 hover:border-[2px] p-2 m-2  w-72 flex flex-col justify-center">
       <div>
        <img className="h-full w-full object-cover rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      </div>
       <div className="flex justify-center  p-1">
         <div className= "pr-1">
          <FaUserCircle/>
         </div>
         <div className="flex flex-col">
           <h6 className="text-black  font-medium w-[250px]">{title}</h6>
           <p className="text-gray-500">{channelTitle}</p>
           <div className="flex flex-row">
             <div className="after:content-['•'] after:mx-1">{(statistics.viewCount/1000000).toFixed(2)+"M"}  </div>
             {/* <div className="text-gray-500">•</div> */}
             <div className="text-gray-500">{snippet.publishedAt}</div>
           </div>
        </div>
     </div>
      

     </div>
  );
};

export default VideoCard;