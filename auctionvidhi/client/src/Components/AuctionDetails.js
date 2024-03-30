import axios from 'axios'; // Make sure to import axios, not Axios
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';




function AuctionDetails() {
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/getAuction").then(response => {
      console.log(response.data,"rrsponse actiondetail")
            if (response.data) {
                setAuctionData(response.data.auctions)
            }
        }).catch(err => {
            console.log(err)
        })
  },[]);
  return (
    <div
     style={{
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      backgroundImage: 'url("")', // Add the path to your background image
      backgroundSize: '0px', // Adjust as needed
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)', // Add box shadow
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
      {auctionData ? auctionData.map((auction) => (
        <div key={auction._id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '3px solid black', paddingBottom: '20px', marginBottom: '0px',fontFamily:'tahoma' }}>
          <h3>{auction.title}</h3>
          <div style={{ flex: '0 0 20px' }} />
          <img src={auction.image} alt={auction.title} style={{ width: '250px', height: '200px', objectFit: 'contain', marginBottom: '10px' }} />
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <div style={{ flex: '0 0 20px' }} />
            <div style={{ border: '1px solid black', padding: '0px', borderRadius: '5px', margin: '25px 0', flex: 1 }}>
              <p>Price: {auction.price}</p>
            </div>
            <div style={{ flex: '0 0 20px' }} />
            <div style={{ wordWrap:'normal',border: '1px solid black', padding: '0px', borderRadius: '5px', margin: '25px 0', flex: 1 }}>
              <p>Condition: {auction.condition}</p>
            </div>
            <div style={{ flex: '0 0 20px' }} />
            <div style={{ border: '1px solid black', padding: '0px', borderRadius: '5px', margin: '25px 0', flex: 1 }}>
              <p>Auction Date: {new Date(auction.auctionDate).toLocaleDateString()}</p>
            </div>
            <div style={{ flex: '0 0 20px' }} />
            <div style={{ border: '1px solid black', padding: '0px', borderRadius: '5px', margin: '25px 0', flex: 1 }}>
              <p>Auction Time: {auction.auctionTime}</p>
            </div>
          </div>
          <div style={{ flex: '0 0 20px' }} />
          <Link to={`/AuctionDescription/${auction._id}`} style={{ textDecoration: 'none', color: 'black', marginTop: '15px' }}>
            <button style={{ padding: '10px 20px',marginBlock:'10px', backgroundColor: 'grey', border: 'none', cursor: 'pointer' }}>
              View Auction
            </button>
          </Link>
          
        </div>
      )):<div>No Auction Found.</div>}
      
    </div>
  );
}

export { AuctionDetails };


