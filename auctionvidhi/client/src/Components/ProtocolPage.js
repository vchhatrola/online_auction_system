
import React from 'react';
import { Link } from 'react-router-dom';

function ProtocolPage() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="border p-4">
            <h2 className="text-center mb-4">Protocol for Bidder</h2>
            <ol>
              <li className="mb-3"><strong>Register:</strong> Create an account on the auction platform.</li>
              <li className="mb-3"><strong>Research:</strong> Know the item's value and auction terms.</li>
              <li className="mb-3"><strong>Verify Auction Details:</strong> Understand starting bid, increments, end time.</li>
              <li className="mb-3"><strong>Bid Responsibly:</strong> Stay within budget, avoid impulsive bids.</li>
              <li className="mb-3"><strong>Understand Bidding Process:</strong> Know how to bid, acceptance criteria.</li>
              <li className="mb-3"><strong>Monitor Auction:</strong> Keep track of current highest bid and updates.</li>
              <li className="mb-3"><strong>Develop Bidding Strategy:</strong> Consider timing and competition.</li>
              <li className="mb-3"><strong>Respect Rules and Etiquette:</strong> Follow platform guidelines.</li>
              <li className="mb-3"><strong>Communicate:</strong> Reach out to support for assistance if needed.</li>
              <li><strong>Complete Transaction:</strong> Follow payment and shipping instructions if you win.</li>
            </ol>
            <Link to="/home" className="ml-2">Back</Link>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ProtocolPage;


