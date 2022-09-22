import React from 'react';
import './HomePage.css'


export default function HomePage() {
    return (
    <>
    <div className="all-container">
    <div id="right">
<div className="titleBar">
      <img className="logo" alt="" src="https://i.imgur.com/dK7TCaS.png" />
      <p className="title-bar-home">the LeftOver</p></div>
      <div className="tagline">
        {/* <p>(your trash, my treasure - building a sustainable future piece by piece</p> */}
        </div>
        </div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://i.imgur.com/XemNHZT.jpg" alt="books" />
    </div>
    <div className="flip-card-back">
      <h1>Did You Know?</h1> 
      <h2>The US makes up only 5% of the world population, but it throws away enough plastic bottles in a week to encircle the Earth 5 times!</h2> 

<h4>Source: <a href="https://www.theworldcounts.com/stories/Pollution-from-Plastic">https://www.theworldcounts.com/stories/Pollution-from-Plastic</a></h4>
  
    </div>
  </div>
</div>
<div className="flip-card2">
  <div className="flip-card-inner2">
    <div className="flip-card-front2">
      <img src="https://i.imgur.com/OTaIhuK.png" alt="books" />
    </div>
    <div className="flip-card-back2">
      <h1>Did You Know?</h1> 
      <h2>The US makes up only 5% of the world population, but it throws away enough plastic bottles in a week to encircle the Earth 5 times!</h2> 
      
<h4>Source: <a href="https://www.theworldcounts.com/stories/Pollution-from-Plastic">https://www.theworldcounts.com/stories/Pollution-from-Plastic</a></h4>
  
    </div>
  </div>
</div>

    </div> 
  </>
  )
};
