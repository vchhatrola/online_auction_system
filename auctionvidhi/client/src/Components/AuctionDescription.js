import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const auctions = [
  {
    id: 1,
    title: 'BMW',
    price: 'Rs.1000000',
    description: 'Luxurious BMW 7 Series with advanced features. 79,247 km and first owner petrol',
    condition: 'New',
    model: '7 Series',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
    image: 'https://cdn.luxatic.com/wp-content/uploads/2021/10/2021-BMW-7-Series-scaled.jpg',
  },
  {
    id: 2,
    title: 'Rolls-Royce',
    price: 'Rs.12000000',
    description: 'Luxury marques command such prestige among the world\'s richest as Rolls-Royce.',
    condition: 'Used',
    model: 'Phantom',
    auctionDate: '2024-03-20',
    auctionTime: '15:30:00',
    image: 'https://www.slashgear.com/img/gallery/12-most-expensive-rolls-royce-cars-of-all-time-ranked/intro-1695633846.webp',
  },
  {
    id: 3,
    title: 'Sports Car',
    price: 'Rs.10000000',
    description: 'The performance envelope of a sports car exceeds that of typical passenger vehicles.',
    condition: 'Defected',
    model: 'Sports Car Model XYZ',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
    image: 'https://imageio.forbes.com/specials-images/imageserve/6064c6802c761b99a89d1f21/0x0.jpg?format=jpg&crop=2375,1336,x0,y120,safe&height=900&width=1600&fit=bounds',
  },
  {
    id: 4,
    title: 'Mercedes-Benz',
    price: 'Rs.30000000',
    description: 'Plans on bringing in new cars like Maybach, AMG and EQ brands.\n\n'+
                  '\nThe LWB E-Class and GLE lead the sales chart\n',
    condition: 'New',
    model: 'Mercedes-Maybach S-Class',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
    image: 'https://english.cdn.zeenews.com/sites/default/files/2022/01/12/1004731-mercedes-maybach-s-class.jpg',
  },
  {
    id: 5,
    title: 'Land-Rover',
    price: 'Rs.97 Lakh',
    description: 'The Land Rover Defender has 2 Diesel Engine and 7 Petrol Engine on offer. The Diesel engine is 2998 cc and 2997 cc while the Petrol engine is 1997 cc and 2998 cc and 1998 cc and 2997 cc and 4997 cc and 5000 cc and 4998 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Defender has a mileage of 14.01 kmpl . The Defender is a 6 seater 8 cylinder car and has length of 4583 mm and width of 2105 mm',
    condition: 'New',
    model: 'Land-Rover Defender',
    auctionDate: '2024-03-25',
    auctionTime: '20:45:00',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Land-Rover/Defender/9065/Land-Rover-Defender-2.0-90-HSE/1686138012912/front-left-side-47.jpg?tr=w-664',
  },
  {
    id: 6,
    title: 'Volvo',
    price: 'Rs.1.01 Cr',
    description: ' The XC90 mild hybrid has been engineered to deliver smooth take-offs and refined acceleration, making both city and highway journeys more refined. Every drop of fuel saved helps – and in our mild hybrids, you enjoy lower fuel consumption without experiencing performance compromises.',
    condition: 'New',
    model: 'Volvo XC90',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
    image: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC-90/10588/1689924353443/front-left-side-47.jpg?tr=w-664',
  },
  {
    id: 7,
    title: 'Toyota Fortuner',
    price: 'Rs. 33.43 Lakh',
    description: 'Toyota Fortuner 4X2 MT 2.8 Diesel is the diesel variant in the Toyota Fortuner lineup. It gives a mileage of 14.6 kmpl.Toyota Fortuner 4X2 MT 2.8 Diesel is available in Manual transmission and offered.\nToyota Fortuner in 7 colours: Attitude Black, Sparkling Black Cystal Shine, Phantom Brown, Avant-Garde Bronze, Silver Metallic, Platinum White Pearl and Super White.',
    condition: 'New',
    model: 'Toyota Fortuner 4*2 MT',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-left-front-three-quarter.jpeg?q=80',
  },
  {
    id: 8,
    title: 'BYD Seal',
    price: 'Rs. 41.00 Lakh',
    description: 'BYD Seal Dynamic is the electric variant in the BYD Seal lineup and is priced at Rs41.00 Lakh.\nBYD Seal Dynamic is available in Automatic transmission .\nBYD Seal  in 4 colours: Cosmos Black, Atlantis Grey, Arctic Blue and Aurora White.',
    condition: 'New',
    model: 'BYD Seal Dynamic',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139619/seal-exterior-left-front-three-quarter-2.jpeg?isig=0&q=80',
  },
  {
    id: 9,
    title: 'Land Rover Range Rover',
    price: 'Rs. 67.90 Lakh',
    description: 'Land Rover Range Rover Evoque SE R-Dynamic Petrol is the top model in the Land Rover Range Rover Evoque lineup and the price of Range Rover Evoque top model is Rs67.90 Lakh. It gives a mileage of 10.9 kmpl. Land Rover Range Rover Evoque SE R-Dynamic Petrol is available in Automatic (TC) transmission.  In this 4 colours: Santorini Black, Tribeca Blue, Corinthian Bronze and Fuji White.',
    condition: 'New',
    model: 'Land Rover Range Rover Evoque SE R-Dynamic Petrol',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/45408/landrover-range-rover-evoque-right-front-three-quarter5.jpeg?wm=1&q=80',
  },
  {
    id: 10,
    title: 'BMW',
    price: 'Rs. 72.90 Lakh',
    description: 'The BMW M340i has been updated with new adaptive LED headlights with integrated LED DRLs and a blue accent. There also a new set of 19-inch alloy wheels with a diamond-cut finish and a Jet Black accent. It also sports a trendier, sharper kidney grille. The single-piece curved dashboard display with the fully digital instrument cluster on the right side and the 14.9-inch touchscreen display for the infotainment system are the main highlights of the update. The interior is outfitted with black Alcantara/Sensatec combination upholstery with contrast blue stitching.',
    condition: 'New',
    model: 'BMW M340i',
    auctionDate: '2024-03-15',
    auctionTime: '18:00:00',
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/135697/2022-m340i-xdrive-exterior-right-front-three-quarter.jpeg?isig=0&q=80',
  },
];

function AuctionDescription() {
  const { id } = useParams();
  const [auction, setAuction] = useState([]);
  const [ID, setId] = useState(id);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/getAuction/${id}`).then(response => {
        console.log(response.data, "response actiondetail");
        if (response.data) {
          setAuction(response.data.data);
        }
    }).catch(err => {
        console.log(err);
    });
},[ID]);

  if (!auction) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Auction not found</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'#888B90',fontFamily:'tahoma' }}>
      <h2>{auction.title}</h2>
      <img src={auction.image} alt={auction.title} style={{ width: '400px', height: '300px', objectFit: 'contain' }} />
      <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#212529', textAlign: 'left' }}>Price: {auction.price}</p>
      <div style={{ textAlign: 'center' }}>
        <p style={{fontWeight:'bold', textAlign:'center'}}>Description:</p>
        {auction.description}
      </div><br/>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline',textAlign:'justify' }}>Condition:</p>
        <p style={{ display: 'inline' }}>{auction.condition}</p>
      </div><br/>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Car Model:</p>
        <p style={{ display: 'inline' }}>{auction.title}</p>
      </div><br/>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Auction Date:</p>
        <p style={{ display: 'inline' }}>{new Date(auction.auctionDate).toLocaleDateString()}</p>
      </div><br/>
      <div style={{ textAlign: 'left' }}>
        <p style={{ fontWeight: 'bold', display: 'inline' }}>Auction Time:</p>
        <p style={{ display: 'inline' }}>{auction.auctionTime}</p>
      </div>
      <button style={{ textAlign:'center',marginTop: '20px',width:'100px', padding: '1opx,30px', backgroundColor: '#6495ED', border: '2 px solid #ADD8E6',borderRadius:'10px', cursor: 'pointer'}}>
       <Link to='/Chat'>Place Bid</Link> 
      </button>
    </div>
  );
}

export default AuctionDescription;
