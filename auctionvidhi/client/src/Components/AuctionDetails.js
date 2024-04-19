
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AuctionDetails() {
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getAuction").then(response => {
      console.log(response.data, "response actiondetail")
      if (response.data) {
        setAuctionData(response.data.auctions)
      }
    }).catch(err => {
      console.log(err)
    })
  }, []);

  return (
    <div className="container">
      <h3 className="mt-2 mb-4 text-center">Auction List</h3>
      <div className="row">
        {auctionData && auctionData.length > 0 ? auctionData.map((auction) => (
          <div key={auction._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow">
              <h5 className="card-title text-center">{auction.title}</h5>
              <img src={auction.image} className="card-img-top img-fluid" alt={auction.title} style={{ height: '200px' }} />
              <div className="card-body">
                <p className="card-text">Price: {auction.price}</p>
                <p className="card-text">Condition: {auction.condition}</p>
                <p className="card-text">Auction Date: {new Date(auction.auctionDate).toLocaleDateString()}</p>
                <Link to={`/AuctionDescription/${auction._id}`} className="btn btn-primary">
                  View Auction
                </Link>
              </div>
            </div>
          </div>
        )) : <div className="col-12">No Auction Found.</div>}
      </div>
    </div>
  );
}

export { AuctionDetails };
