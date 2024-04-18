
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AuctionDescription() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [redirectToChat, setRedirectToChat] = useState(false);

  useEffect(() => {
    localStorage.setItem("auctionId",id)
    axios.get(`http://localhost:3000/api/getAuction/${id}`)
      .then(response => {
        console.log(response.data, "response auction detail");
        if (response.data) {
          setAuction(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  const handleBidClick = () => {
    let currentDate = new Date();
    let auctionDate = new Date(auction.auctionDate);
    
    let currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    let auctionDay = new Date(auctionDate.getFullYear(), auctionDate.getMonth(), auctionDate.getDate());

    console.log(currentDay, "current date", auctionDay, "auction date");

    if (auctionDay < currentDay) {
      toast('This auction has ended!');
    } else if (auctionDay > currentDay) {
      toast('This auction is upcoming!');

    } else {
      setRedirectToChat(true);
    }
  };

  if (!auction) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Auction not found</div>;
  }

  if (redirectToChat) {
    return <Navigate to="/Chat" />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#888B90', fontFamily: 'tahoma' }}>
      <h2>{auction.title}</h2>
      <img src={auction.image} alt={auction.title} style={{ width: '400px', height: '300px', objectFit: 'contain' }} />
      <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#212529', textAlign: 'left' }}>Price: {auction.price}</p>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Description:</p>
        {auction.description}
      </div><br />
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline', textAlign: 'justify' }}>Condition:</p>
        <p style={{ display: 'inline' }}>{auction.condition}</p>
      </div><br />
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Car Model:</p>
        <p style={{ display: 'inline' }}>{auction.model}</p>
      </div><br />
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Auction Date:</p>
        <p style={{ display: 'inline' }}>{new Date(auction.auctionDate).toLocaleDateString()}</p>
      </div><br />
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Auction Time:</p>
        <p style={{ display: 'inline' }}>{auction.auctionTime}</p>
      </div>
     
        <button onClick={handleBidClick} style={{ textAlign: 'center', marginTop: '20px', width: '100px', padding: '10px 30px', backgroundColor: '#6495ED', border: '2px solid #ADD8E6', borderRadius: '10px', cursor: 'pointer' }}>Place Bid</button>
     
    </div>
  );
}

export default AuctionDescription;
