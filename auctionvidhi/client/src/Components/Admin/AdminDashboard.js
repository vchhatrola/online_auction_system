import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import ProfileICon from '../../images/profile.gif';
import BidAuctionICon from '../../images/BIdAction.gif';
import ListICon from '../../images/list.gif';
import axios from 'axios';
import { toast } from 'react-toastify';


function AdminDashboard() {
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    const fetchUserCount = async () => {
      axios.get(`http://localhost:3000/admin/totalCount`)
        .then(response => {
          console.log(response.data, "res")
          setTotalCount(response.data.totalCount)
        }).catch(err => {
          toast.error(err)
          console.log(err)
        })
    };

    fetchUserCount();
  }, []);


  return (
    <div className="container-fluid admin">
      <div className="row">
        <div className='col-md-3'>
          <AdminSidebar />
        </div>
        <div className="col-md-9">
          <div className='col-md-12 mb-5 mt-3 text-center'>
            <h1 className='text-secondary'>Admin Dashboard</h1>
          </div>
          <div className='row mt-5'>
            <div className='col-md-4'>
              <div className="card text-bg-light  mb-3" >
                <div className="card-header"><b>User Count</b></div>
                <div className="card-body text-center">
                  <img src={ProfileICon} alt="Profile Icon" style={{ "width": "4rem" }} />
                  <p className="card-text">Total register user<br /><b> {totalCount && totalCount.totalUsers}</b></p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card text-bg-light  mb-3" >
                <div className="card-header"><b>Auction Count</b></div>
                <div className="card-body text-center">
                  <img src={ListICon} alt="List Icon" style={{ "width": "4rem" }} />
                  <p className="card-text">Total Auction <br /> <b>{totalCount && totalCount.totalAuction}</b></p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card text-bg-light  mb-3" >
                <div className="card-header"><b>Auction Bid Count</b></div>
                <div className="card-body text-center">
                  <img src={BidAuctionICon} alt="Bid Icon" style={{ "width": "4rem" }} />
                  <p className="card-text">Total Bid<br /><b>{totalCount && totalCount.totalAuctionBid}</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
