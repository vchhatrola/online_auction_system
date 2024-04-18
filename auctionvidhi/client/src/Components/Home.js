import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    //const backgroundImageUrl = 'url("https://media.istockphoto.com/id/843079144/photo/businessman-is-shopping-online-to-choose-a-cars-to-buy-about-internet-of-thing-concept.jpg?s=612x612&w=0&k=20&c=3NBmlyqAYzC3gHdNmEK3YhkqUXJuqAbO4pyPH2xck6s=")';
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let userDetail = JSON.parse(localStorage.getItem("user"))
    axios.defaults.withCredentials = true;
    const handleLogout = () => {
        localStorage.clear();
        axios.get('http://localhost:3000/auth/logout')
            .then(res => {
                if (res.data.status) {
                    navigate('/')
                }
            }).catch(err => {
                console.log(err)
            })
    };

   
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div style={{ backgroundImage: 'url("https://t4.ftcdn.net/jpg/04/04/62/93/360_F_404629349_a1IbeycxtaxSHL7NkZH6zuVNIFNcWdOw.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand ml-5 mr-5" >Online Auction System</Link>
            <button className="navbar-toggler" type="button" onClick={handleToggleMenu}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/AuctionDetails" className="nav-item nav-link">View Auction Details</Link>
                    {/* <Link to={`/EditProfile/${user._id}`} className="nav-item nav-link">Edit Profile</Link> */}
                    <Link to="/protocol" className="nav-item nav-link">Protocol</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact us</Link>
                   {userDetail.role === "admin"? <Link to="/adminDashboard" className="nav-item nav-link">Admin</Link>:""}
                    <Link to="/" className="nav-item nav-link" onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Home
