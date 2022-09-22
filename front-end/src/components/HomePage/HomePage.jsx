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


<div className="all-cards">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="https://i.imgur.com/XemNHZT.jpg" alt="" />
        </div>
        <div className="flip-card-back">
          <h1>Did you know?</h1>
          <h3>According to the EPA, municipal solid waste in 2018 was 294.2 million tons, or 4.9 pounds per person per day.</h3>
        </div>
      </div>
    </div>

  <div className="flip-card2">  1
    <div className="flip-card-inner2">
      <div className="flip-card-front2">
        <img src="https://i.imgur.com/OTaIhuK.png" alt="Avatar" />
      </div>
      <div className="flip-card-back2">
        <h1>Did You Know?</h1>
        <h3>In 2018, about 146.1 million tons of MSW were landfilled. Food was the largest component at about 24 percent.</h3>
      </div>
    </div>
  </div>
  </div>
  </div>
  
  </>
  )
};
