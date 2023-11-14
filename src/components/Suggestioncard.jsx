import React from 'react'

const SuggestionCard = () => {
  return (
    <div className="suggestion-card">
    <img
      className="suggestion-thumbnail"
      src="https://files.codingninjas.in/article_images/best-coding-practices-for-hassle-free-programming-0-1676021160.jpg"
      alt=""
    />

    <div className="card-body">
      <div className="card-text">
      <p className="title">{video.title}</p>
          <p className="faded">{video.channelName}</p>
          <p className="faded">{`${video.views} • ${video.uploadedAt}`} </p>
      </div>
    </div>
  </div>
);
  
};

export default SuggestionCard;