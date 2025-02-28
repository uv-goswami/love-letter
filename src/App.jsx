import React from 'react';
import './Css/style.css';
import Home from './Components/Home';
import Proposal from './Components/Proposal';
import MoreAboutYou from './Components/MoreAboutYou';
import ThankYou from './Components/ThankYou';
import Navigation from './Components/Navigation';
import ResponseForm from './Components/ResponseForm';

function App() {
  return (
    <div>
      <Navigation />
      <div className="section" id="home"><Home /></div>
      <div className="section" id="proposal"><Proposal /></div>
      <div className="section" id="more-about-you"><MoreAboutYou /></div>
      <div className="section" id="thank-you"><ThankYou /></div>
      <div className="section" id="response-form"><ResponseForm /></div>
    </div>
  );
}

export default App;
