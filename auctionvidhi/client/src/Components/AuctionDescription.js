
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function AuctionDescription() {
//   const { id } = useParams();
//   const [auction, setAuction] = useState(null);
//   const [redirectToChat, setRedirectToChat] = useState(false);

//   useEffect(() => {
//     localStorage.setItem("auctionId",id)
//     axios.get(`http://localhost:3000/api/getAuction/${id}`)
//       .then(response => {
//         console.log(response.data, "response auction detail");
//         if (response.data) {
//           setAuction(response.data.data);
//         }
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, [id]);

//   const handleBidClick = () => {
//     let currentDate = new Date();
//     let auctionDate = new Date(auction.auctionDate);
    
//     let currentDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
//     let auctionDay = new Date(auctionDate.getFullYear(), auctionDate.getMonth(), auctionDate.getDate());

//     console.log(currentDay, "current date", auctionDay, "auction date");

//     if (auctionDay < currentDay) {
//       toast('This auction has ended!');
//     } else if (auctionDay > currentDay) {
//       toast('This auction is upcoming!');

//     } else {
//       setRedirectToChat(true);
//     }
//   };

//   if (!auction) {
//     return <div style={{ textAlign: 'center', marginTop: '50px' }}>Auction not found</div>;
//   }

//   if (redirectToChat) {
//     return <Navigate to="/Chat" />;
//   }

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#888B90', fontFamily: 'tahoma' }}>
//       <h2>{auction.title}</h2>
//       <img src={auction.image} alt={auction.title} style={{ width: '400px', height: '300px', objectFit: 'contain' }} />
//       <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#212529', textAlign: 'left' }}>Price: {auction.price}</p>
//       <div style={{ textAlign: 'center' }}>
//         <p style={{ fontWeight: 'bold', textAlign: 'center' }}>Description:</p>
//         {auction.description}
//       </div><br />
//       <div style={{ textAlign: 'left' }}>
//         <p style={{ fontWeight: 'bold', display: 'inline', textAlign: 'justify' }}>Condition:</p>
//         <p style={{ display: 'inline' }}>{auction.condition}</p>
//       </div><br />
//       <div style={{ textAlign: 'left' }}>
//         <p style={{ fontWeight: 'bold', display: 'inline' }}>Car Model:</p>
//         <p style={{ display: 'inline' }}>{auction.model}</p>
//       </div><br />
//       <div style={{ textAlign: 'left' }}>
//         <p style={{ fontWeight: 'bold', display: 'inline' }}>Auction Date:</p>
//         <p style={{ display: 'inline' }}>{new Date(auction.auctionDate).toLocaleDateString()}</p>
//       </div><br />
//       <div style={{ textAlign: 'left' }}>
//         <p style={{ fontWeight: 'bold', display: 'inline' }}>Auction Time:</p>
//         <p style={{ display: 'inline' }}>{auction.auctionTime}</p>
//       </div>
     
//         <button onClick={handleBidClick} style={{ textAlign: 'center', marginTop: '20px', width: '100px', padding: '10px 30px', backgroundColor: '#6495ED', border: '2px solid #ADD8E6', borderRadius: '10px', cursor: 'pointer' }}>Place Bid</button>
     
//     </div>
//   );
// }

// export default AuctionDescription;
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
    localStorage.setItem("auctionId", id)
    axios.get(`http://localhost:3000/api/getAuction/${id}`)
      .then(response => {
        console.log(response.data, "response auction detail");
        if (response.data) {
          setAuction(response.data.data[0]);
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
    <div className="container">
      <div className="card mt-5 p-3">
        <h2 className="card-title text-center mb-4">{auction.title}</h2>
        {/* <img src={auction.image} alt={auction.title} className="card-img-top mx-auto d-block" style={{ width: '400px', height: '300px', objectFit: 'contain' }} /> */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
  {/* <div className="carousel-inner" >
    <div className="carousel-item active">
      <img src={auction.image} style={{ width: '700px', height: '500px', objectFit: 'contain' }} alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src="https://cdn.luxatic.com/wp-content/uploads/2021/10/2021-BMW-7-Series-scaled.jpg"  style={{ width: '700px', height: '500px', objectFit: 'contain' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://english.cdn.zeenews.com/sites/default/files/2022/01/12/1004731-mercedes-maybach-s-class.jpg"  style={{ width: '700px', height: '500px', objectFit: 'contain' }} alt="..."/>
    </div> */}
    <div className="carousel-inner">
      {auction.imageData && auction.imageData.map((item, i)=>{
        return (<div className={i == 0 ?`carousel-item active`:`carousel-item`}>
        <img src={item.image} className="mx-auto" style={{width:"100%", height:"100%",  objectFit: 'contain' }} alt="..." />
      </div>)
      })}
  
  {/* <div className="carousel-item">
    <img src="https://cdn.luxatic.com/wp-content/uploads/2021/10/2021-BMW-7-Series-scaled.jpg" className="mx-auto" style={{ width: '1100px', height: '500px', objectFit: 'contain' }} alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://english.cdn.zeenews.com/sites/default/files/2022/01/12/1004731-mercedes-maybach-s-class.jpg" className="mx-auto" style={{ width: '1100px', height: '500px', objectFit: 'contain' }} alt="..." />
  </div> */}


  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon custom-icon " aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        <div className="card-body">
          <p className="card-text" style={{ fontWeight: 'bold', fontSize: '18px', color: '#212529' }}>Price: {auction.price}</p>
          <p className="card-text" style={{ fontWeight: 'bold', textAlign: 'left' }}>Description: {auction.description}</p>
          <p className="card-text" style={{ fontWeight: 'bold', textAlign: 'left' }}>Condition: {auction.condition}</p>
          <p className="card-text" style={{ fontWeight: 'bold', textAlign: 'left' }}>Car Model: {auction.model}</p>
          <p className="card-text" style={{ fontWeight: 'bold', textAlign: 'left' }}>Auction Date: {new Date(auction.auctionDate).toLocaleDateString()}</p>
          <p className="card-text" style={{ fontWeight: 'bold', textAlign: 'left' }}>Auction Time: {auction.auctionTime}</p>
          <button onClick={handleBidClick} className="btn btn-primary mt-3 mx-auto d-block">Place Bid</button>
        </div>
      </div>
    </div>
  );
}

export default AuctionDescription;
