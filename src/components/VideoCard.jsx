import React from 'react'
import { useNavigate } from "react-router-dom";

 const VideoCard = ({video}) => {
  const navigate= useNavigate();

  
  return (
    <div className="card">
    <img className="thumbnail"
     src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=1024x1024&w=is&k=20&c=ffZ9DMUWJuqSOgFds4ltM_71PRVfBBu5vhPznWewDOM=" alt="" />

    <div className="card-body">
      <img className="channelImage"
       src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.jpg?s=1024x1024&w=is&k=20&c=L7yKxE2ufFY1-plz5JtX_GnhQFJB4VaHbHYWQAP6WNk=" alt="" />

      <div className="card-text">
        <p>Title</p>
        <p>Channel Name</p>
        <p>100K 2 months ago</p>
      </div>
    </div>
  </div>
  )
}

export default VideoCard;