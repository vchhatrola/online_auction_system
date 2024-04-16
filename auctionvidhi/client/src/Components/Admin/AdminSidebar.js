
import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
function AdminSidebar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
  
    // Function to handle link click
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };

  return (
    <div className="col-auto sidebar">
      <ul className="nav flex-column">
        <li className="nav-item"  onClick={() => handleLinkClick('/adminDashboard')} >
            <Link to="/adminDashboard" className={`nav-link ${activeLink === '/adminDashboard' ? ' active' : ''}`}>Admin</Link>
        </li>
        <li className="nav-item"   onClick={() => handleLinkClick('/userList')} >
            <Link to="/userList"  className={`nav-link ${activeLink === '/userList' ? ' active' : ''}`}>User List</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Product List</a>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;