import React from 'react';
import './HomePage.css'


export default function HomePage() {
<<<<<<< HEAD
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

=======
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
>>>>>>> ffca8fe70cbb21124d7b0b1b9a3ab359cc670876
    </div> 
  </>
  )
};
