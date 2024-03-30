import React from 'react';
import { Link } from 'react-router-dom';

function AuctionList() {

  const backgroundImageUrl = 'url("https://media.istockphoto.com/id/843079144/photo/businessman-is-shopping-online-to-choose-a-cars-to-buy-about-internet-of-thing-concept.jpg?s=612x612&w=0&k=20&c=3NBmlyqAYzC3gHdNmEK3YhkqUXJuqAbO4pyPH2xck6s=")';

  return (
    <div style={{
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: `rgba(255 , 255 , 0 , 0.3) ${backgroundImageUrl} center/cover`, // Apply opacity only to the background
      minHeight: '60vh',
      width: '1100px',
      padding: '100px',
    
    }}>
      <h2 style={{ textAlign: 'center', color: 'deeppink' }}>Auction List</h2>
      <Link to="/AuctionDetails" style={{ textAlign: 'right', textDecoration: 'none', color: 'chocolate' }}>View Auction Details</Link>
      <br /><br />
      <Link to="/protocol" style={{ textAlign: 'right', textDecoration: 'none', color: 'darkblue' }}>Protocol</Link>
    </div>
  );
}

export default AuctionList;

