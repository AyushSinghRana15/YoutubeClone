import React from 'react';
import SuggestionCard from './Suggestioncard';
const VedioPage = () => {
  return (
    <div className="VideoPage">
      <div className="VideoItem">
      <iframe className="iframe-videos"
       src="https://www.youtube.com/embed/hzyzvh1kRAM?si=kjXk3XjelvjSCh92"
        title="YouTube video player"
         frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen
         
         ></iframe>

        <div className="description">
          <img className="channelImage" src="https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.jpg?s=1024x1024&w=is&k=20&c=L7yKxE2ufFY1-plz5JtX_GnhQFJB4VaHbHYWQAP6WNk=" alt="" />

          <div className="channelText">
            <p>Channel Name</p>
            <p>333K</p>
          </div>

          <button className="subscribe-button">Subscribe</button>
        </div>

        <br />

        <div className="description-text">
          <p>
            <b>105K views 6 months ago</b>
          </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse itaque tenetur recusandae, non veritatis aperiam? Provident similique sint odio asperiores cupiditate, officia ipsum fugiat. Deleniti?</p>
        </div>
      </div>

      <div className="suggestionBar">
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
        <SuggestionCard />
      </div>
    </div>
  )
}

export default VedioPage;