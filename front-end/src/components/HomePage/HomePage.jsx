import React from 'react';
import './HomePage.css'


export default function HomePage() {
  return (
  <>
  <div className="all-container">
    <section id="right">

        <div className="titleBar">
          <p className="title-bar-home"></p></div>
          <div className="tagline">
      {/* <p>(your trash, my treasure - building a sustainable future piece by piece</p> */}
        </div>
    </section>

    <section id="pic-block">
      <div className="flip-box" id="one">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2>Books</h2>
            <div className='pic-cell'>
              <img id="splash-image" alt="" src="https://i.imgur.com/XemNHZT.jpg"/>
            </div>
          </div>
          <div className="flip-box-back">
            <p className="flip-title"><em style={{'backgroundColor':'#4D92F0'}}>Did You Know?</em></p>
            <p className="flip-title">According to the EPA, municipal solid waste in 2018 was 294.2 million tons, or 4.9 pounds per person per day.</p>
          </div>
        </div>
      </div>
      <div className="flip-box" id="two">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <h2>Books</h2>
            <div className='pic-cell'>
              <img id="splash-image" alt="" src="https://i.imgur.com/OTaIhuK.png"/>
            </div>
          </div>
          <div className="flip-box-back">
            <p className="flip-title"><em style={{'backgroundColor':'#4D92F0'}}>Did You Know?</em></p>
            <p className="flip-title">In 2018, about 146.1 million tons of MSW were landfilled. Food was the largest component at about 24 percent.</p>
          </div>
        </div>
      </div>
    </section>                               
    </div> 
  </>
  )
};
