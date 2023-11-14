import React from 'react'
import { useNavigate } from "react-router-dom";

 const VideoCard = ({video}) => {
  const navigate= useNavigate();

  const handleClick = () => {

    navigate(`/videos/${video.id}`);
  };

  
  return (
    <div className="card" onClick={handleClick}>
    <img className="thumbnail" src={video.thumbnail.url} alt="" />

    <div className="card-body">
      <img className="channelImage"
       src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.jpg?s=1024x1024&w=is&k=20&c=L7yKxE2ufFY1-plz5JtX_GnhQFJB4VaHbHYWQAP6WNk=" alt="" />

      <div className="card-text">
      <p className="title">{video.title}</p>
          <p className="faded">{video.channelName}</p>
          <p className="faded">{`${video.views} • ${video.uploadedAt}`} </p>
      </div>
    </div>
  </div>
  )
}

export default VideoCard;