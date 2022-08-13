import React from 'react';
import './Home.css';
import ToggleTabs from './ToggleTabs';

function Home() {
  return (
    <>
      <div id="title-bar">
        <p>HOW DOES THE LEFTOVER WORK?</p>
      </div>
    <section>
      <div className="btn-title">
        <button  id="share" onClick={ToggleTabs}>How to Share</button>
        <button id="respond" onClick={ToggleTabs}>How to Respond</button>
        </div>
          <section id="myShareDIV">
            <div className="share-cards">
              <div className="share-card">
                <img alt="" id="join-us" src="https://i.imgur.com/dgjxu5Y.png"/>
                <footer className="primary-share-text">1.  Register</footer>
                <footer className="primary-share-text">Wzfdgfdfhggxhgggjgjdgdgfhdgghjgfdgj</footer>
              </div>
              <div className="share-card">
             
                <img alt="" id="typing" src="https://i.imgur.com/LYzojwGb.jpg"/>
                <p className="primary-share-text">2. Add your listingrqgregregrgregrgrgqrgqgrgrgrgrgqr</p>
        
              </div>
              <div className="share-card">
              <div>
                <img alt="" id="sharing" src="https://i.imgur.com/qr0BK31.png"/>
                <p className="primary-share-text">3. Share your leftover6krukk55kk5ickik5kk5kik</p></div>
              </div>
            </div>
          </section>
          <section id="myRespondDIV">
          </section>
    </section>
    </>
  )
}

export default Home;
