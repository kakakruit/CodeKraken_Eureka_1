import React from 'react';
import './body3.css'; // Import your CSS file for styling
import bg from './bg.mp4';

function Body3() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="body3-container">
         <video src={bg} autoPlay loop muted className="video-background" />
      <heading>So, what are you waiting for?</heading>
      <button onClick={scrollToTop}>Try Money Advisor</button>
    </div>
  );
}

export default Body3;
