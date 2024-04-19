
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
function AdminSidebar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="col-auto sidebar">
      <ul className="nav flex-column">
        <li className="nav-item" onClick={() => handleLinkClick('/adminDashboard')} >
          <Link to="/adminDashboard" className={`nav-link ${activeLink === '/adminDashboard' ? ' active' : ''}`}>Admin</Link>
        </li>
        <li className="nav-item" onClick={() => handleLinkClick('/userList')} >
          <Link to="/userList" className={`nav-link ${activeLink === '/userList' ? ' active' : ''}`}>User List</Link>
        </li>
        <li className="nav-item" onClick={() => handleLinkClick('/productList')} >
          <Link to="/productList" className={`nav-link ${activeLink === '/productList' ? ' active' : ''}`}>Product List</Link>
        </li>
        <li className="nav-item" onClick={() => handleLinkClick('/auctionBidList')} >
          <Link to="/auctionBidList" className={`nav-link ${activeLink === '/auctionBidList' ? ' active' : ''}`}>Auction Bid List</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
