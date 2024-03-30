import React from 'react';
import { Link } from 'react-router-dom';


function ProtocolPage() {
  return (
    <div>
      <h2 style={{textAlign:'center' ,color:'brown'}}>Protocol for Bidder</h2>
      <ol>
        <li style={{textAlign:'justify'}}><strong>Register:</strong> Create an account on the auction platform.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Research:</strong> Know the item's value and auction terms.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Verify Auction Details:</strong> Understand starting bid, increments, end time.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Bid Responsibly:</strong> Stay within budget, avoid impulsive bids.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Understand Bidding Process: </strong>Know how to bid, acceptance criteria.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Understand Bidding Process:</strong> Know how to bid, acceptance criteria.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Monitor Auction:</strong> Keep track of current highest bid and updates.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Develop Bidding Strategy:</strong> Consider timing and competition.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Respect Rules and Etiquette:</strong> Follow platform guidelines.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Communicate:</strong> Reach out to support for assistance if needed.</li><br/>
        <li style={{textAlign:'justify'}}><strong>Complete Transaction:</strong> Follow payment and shipping instructions if you win.</li>
      </ol>
      <Link to="/home" className="ml-2">Back</Link>
    </div>
  );
}

export default ProtocolPage;
