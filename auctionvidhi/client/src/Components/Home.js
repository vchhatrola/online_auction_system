import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
   //const backgroundImageUrl = 'url("https://media.istockphoto.com/id/843079144/photo/businessman-is-shopping-online-to-choose-a-cars-to-buy-about-internet-of-thing-concept.jpg?s=612x612&w=0&k=20&c=3NBmlyqAYzC3gHdNmEK3YhkqUXJuqAbO4pyPH2xck6s=")';
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleLogout = () => {
        axios.get('http://localhost:3000/auth/logout')
            .then(res => {
                if (res.data.status) {
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err)
            })
    };

    return (
        <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/04/04/62/93/360_F_404629349_a1IbeycxtaxSHL7NkZH6zuVNIFNcWdOw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>

           <h1 style={{textAlign:'center',color:'chocolate'}}> Online Auction System</h1>
            
            <Link to="/Login" style={{ textDecoration: 'none', color: 'darkblue' }}>Login</Link>
            <br /> <br />
            <Link to="/contact" style={{ textDecoration: 'none', color: 'darkblue' }}>contact us</Link>
            <br/><br/>
            <Link to="/AuctionDetails" style={{ textDecoration: 'none', color: 'darkblue' }}>View Auction Details</Link>
            <br /><br />
            <Link to="/protocol" style={{ textDecoration: 'none', color: 'darkblue' }}>Protocol</Link>
            <br/><br/>
    
            <button onClick={handleLogout} className='button1'> Logout</button>
            <br /> <br/>
        </div>
    )
}

export default Home
