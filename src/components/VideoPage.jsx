
import React, { useState, useEffect } from "react";
import SuggestionCard from './Suggestioncard';
import { AiOutlineLike, AiFillLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatDuotone } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import videos from "../data/videos";
import { useParams } from "react-router-dom";
const VedioPage = () => {

  const { videoId } = useParams();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const video = videos.find((video_from_js) => video_from_js.id === videoId);
  const randomSubscriberCount = Math.floor(Math.random() * 1000000);

  useEffect(() => {
    
    setIsSubscribed(!!localStorage.getItem(video.channelId));
  }, [isSubscribed]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleToggleSubscription = () => {
    if (isSubscribed) {
     
      localStorage.removeItem(video.channelId);
    } else {
      

      localStorage.setItem(video.channelId, "subscribed");
    }
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="VideoPage">
      <div className="VideoItem">
      <iframe className="iframe-videos"
        src={embedUrl}
        title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen
         
         ></iframe>

        <div className="description">
         <div className="mixed-group">
          <img className="channelImage" src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.jpg?s=1024x1024&w=is&k=20&c=L7yKxE2ufFY1-plz5JtX_GnhQFJB4VaHbHYWQAP6WNk=" alt="" />

          <div className="channelText">
          <p className="title">{video.channelName}</p>
              <p className="faded">{randomSubscriberCount} subscribers</p>
            </div>

            <button
              className={
                isSubscribed ? "unsubscribe-button" : "subscribe-button"
              }
              onClick={handleToggleSubscription}
            >
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
        </div>
        <div className="button-group">
            <button className="pill" onClick={handleLike}>
              {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}{" "}
              | <AiOutlineDislike size={20} />
            </button>
            <button className="pill">
              <PiShareFatDuotone size={20} /> Share
            </button>
            <button className="download-pill">
              <HiDownload size={20} /> Download
            </button>
          </div>
        </div>

        <br />


        <div className="description-text">
        <p className="title">{`${video.views} • ${video.uploadedAt}`} </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse itaque tenetur recusandae, non veritatis aperiam? Provident similique sint odio asperiores cupiditate, officia ipsum fugiat. Deleniti?</p>
        </div>
      </div>

      <div className="suggestionBar">
      {videos.map((video_from_js) => (
          <SuggestionCard video={video_from_js} key={video_from_js.id} />
        ))}
      </div>
    </div>
  )
}

export default VedioPage;