import React from 'react';
import { Link } from 'react-router-dom';

const auctions = [
  {
    id: 1,
    image: 'https://cdn.luxatic.com/wp-content/uploads/2021/10/2021-BMW-7-Series-scaled.jpg',
    title: 'BMW',
    price: 'Rs.1,00,0000',
    description: 'Luxurious BMW 7 Series with advanced features.',
    condition: 'New',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
  },
  {
    id: 2,
    image: 'https://www.slashgear.com/img/gallery/12-most-expensive-rolls-royce-cars-of-all-time-ranked/intro-1695633846.webp',
    title: 'Rolls-Royce',
    price: 'Rs.12,00,0000',
    condition: 'Used',
    auctionDate: '2024-03-20',
    auctionTime: '15:30:00',
  },
  {
    id: 3,
    image: 'https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&height=900&width=1600&fit=bounds',
    title: 'Sports Car',
    price: 'Rs.10,00,0000',
    condition: 'Defected',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 4,
    image: 'https://english.cdn.zeenews.com/sites/default/files/2022/01/12/1004731-mercedes-maybach-s-class.jpg',
    title: 'Mercedes-Benz',
    price: 'Rs.30,00,0000',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 5,
    image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Defender/9065/Land-Rover-Defender-2.0-90-HSE/1686138012912/front-left-side-47.jpg',
    title: 'Land Rover',
    price: 'Rs.97 Lakh',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 6,
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC-90/10588/1689924353443/front-left-side-47.jpg?tr=w-664',
    title: 'Volvo',
    price: 'Rs.1.01 Cr',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 7,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-left-front-three-quarter.jpeg?q=80',
    title: 'Toyota Fortuner',
    price: 'Rs. 33.43 Lakh',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 8,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80',
    title: 'BYD Seal',
    price: 'Rs. 41.00 Lakh',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 9,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45408/landrover-range-rover-evoque-right-front-three-quarter5.jpeg?wm=1&q=80',
    title: 'Land Rover Range Rover',
    price: 'Rs. 67.90 Lakh',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
  {
    id: 10,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/135697/2022-m340i-xdrive-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
    title: 'BMW M340i',
    price: 'Rs. 72.90 Lakh',
    condition: 'New',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
  },
];
function AuctionDetails() {
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
      {auctions.map((auction) => (
        <div key={auction.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '3px solid black', paddingBottom: '20px', marginBottom: '0px',fontFamily:'tahoma' }}>
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
          <Link to={`/AuctionDescription/${auction.id}`} style={{ textDecoration: 'none', color: 'black', marginTop: '15px' }}>
            <button style={{ padding: '10px 20px',marginBlock:'10px', backgroundColor: 'grey', border: 'none', cursor: 'pointer' }}>
              View Auction
            </button>
          </Link>
          
        </div>
      ))}
      
    </div>
  );
}

export { AuctionDetails };


