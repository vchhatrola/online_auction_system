import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import DeleteIcon from '../../images/deleteIcon.png'
import ReactPaginate from 'react-paginate';
import {  toast } from "react-toastify";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage  ] = useState(5); // Adjust the number of items per page as needed
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchuser()
  }, [offset, perPage]);
const fetchuser =()=>{
  axios.get(`http://localhost:3000/admin/getUsers`).then(response => {
      console.log(response.data, "response ");
      if (response.data) {
        const data = response.data.userList;
        const slice = data.slice(offset, offset + perPage);
        setUserList(slice);
        setPageCount(Math.ceil(data.length / perPage));
      }
    }).catch(err => {
      console.log(err);
    });
}
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage);
  };

  const calculateRowNumber = (index) => {
    return offset + index + 1;
  };
  const deleteUser =(id)=>{
    console.log(id,"delete id")
    axios.get(`http://localhost:3000/admin/deleteUser/${id}`).then(response => {
      console.log(response.data, "response ");
      if (response.data) {
        toast.success(response.data.message)
        fetchuser();
      }
    }).catch(err => {
      console.log(err);
    });

  }
  return (
    <div className="container-fluid admin">
      <div className="row">
        <div className="col-lg-3">
        <AdminSidebar />
        </div>
       
        {/* Main Content */}
        <div className="col-lg-9 mb-5 mt-3">
          <h1 >User List </h1>
          <div className="table-responsive">
          <table className="table table-striped mb-4">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">AadharNumber</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {userList.length !== 0 ? userList.map((user,i) => {
              return(  <tr  key={i}>
                  <th scope="row">{calculateRowNumber(i)}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.address}</td>
                  <td>{user.adharCardNumber}</td>
                  <td><img src={DeleteIcon} style={{"width":"1rem"}} onClick={()=>deleteUser(user._id)}></img></td>
                </tr>)
              }) : (
                <tr>
                  <td colSpan="9">No data found</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
        
        <div className="pagination-container">
            <ReactPaginate
              previousLabel={"← Previous"}
              nextLabel={"Next →"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList
