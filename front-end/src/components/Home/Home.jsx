import React from 'react';
import './Home.css';
import ToggleTabs from './ToggleTabs';

function Home() {
  return (
    <>
      <div id="title-bar-how-to">
        <p>HOW DOES THE LEFTOVER WORK?</p>
      </div>
   
      <div className="btn-title">
        <button  id="share" onClick={ToggleTabs}>How to Share</button>
        <button id="respond" onClick={ToggleTabs}>How to Respond</button>
        </div>
          <section id="myShareDIV">
            <div className="share-cards">
              <div className="share-card">
                <img alt="" id="join-us" src="https://i.imgur.com/dgjxu5Y.png"/>
                <footer className="primary-share-text" id="card-label">1.  Register</footer>
                <footer className="primary-share-text">Create a free account to get connected locally  with neighbors and likeminded others to share and/or receive.</footer>
              </div>
              <div className="share-card">
                <img alt="" id="typing" src="https://i.imgur.com/00UQnDH.png?1"/>
                <footer className="primary-share-text" id="card-label">2. Add your listing</footer>
          <footer className="primary-share-text">Post your surplus item on The LeftOver. Somebody from your community will contact you concerning your surplus item.</footer>
              </div>
              <div className="share-card">
                <img alt="" id="sharing" src="https://i.imgur.com/qr0BK31.png"/>
                <footer className="primary-share-text"  id="card-label">3. Find your own leftover.</footer>
                <footer className="primary-share-text">In a short while, you will have disposed of your left over goods (clothing, appliances, plants, even food). Now take some time, to find what you have been lookng for.</footer></div>
            </div>
            </section>
      
          <section id="myRespondDIV">
                <div className="respond-cards">
              <div className="respond-card">
                <img alt="" id="join-us2" src="https://i.imgur.com/hSBvVAi.png"/>
                <footer className="secondary-share-text" id="card-label2">1.  Register</footer>
                <footer className="secondary-share-text">Create a free account to get connected locally  with neighbors and likeminded others to share and/or receive.</footer>
              </div>
              <div className="respond-card">
             
                <img alt="" id="typing2" src="https://i.imgur.com/00UQnDH.png?1"/>
                <footer className="secondary-share-text" id="card-label2">2. Add your listing</footer>
          <footer className="secondary-share-text">Post your surplus item on The LeftOver. Somebody from your community will contact you concerning your surplus item.</footer>
        
              </div>
              <div className="respond-card">
              
                <img alt="" id="sharing2" src="https://i.imgur.com/4CuSeXF.png"/>
                <footer className="secondary-share-text"  id="card-label2">3. Share or find your own leftover.</footer>
                <footer className="secondary-share-text">In a short while, you will have disposed of your left over goods (clothing, appliances, plants, even food).</footer>
                </div>
            </div>
          </section>
    </>
  )
}

export default Home;
