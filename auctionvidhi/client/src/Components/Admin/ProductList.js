import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import DeleteIcon from '../../images/deleteIcon.png'
import ReactPaginate from 'react-paginate';
import {  toast } from "react-toastify";

const ProductList = () => {
  const [productListdata, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5); // Adjust the number of items per page as needed
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchproduct()
  }, [offset, perPage]);
const fetchproduct =()=>{
  axios.get(`http://localhost:3000/api/getAuction`).then(response => {
      console.log(response.data, "response ");
      if (response.data) {
        const data = response.data.auctions;
        const slice = data.slice(offset, offset + perPage);
        setProductList(slice);
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
  const deleteProduct =(id)=>{
    console.log(id,"delete id")
    axios.get(`http://localhost:3000/api/deleteAuction/${id}`).then(response => {
      console.log(response.data, "response ");
      if (response.data) {
        toast.success(response.data.message)
        fetchproduct();
      }
    }).catch(err => {
      console.log(err);
    });
  }
 
  return (
    <div className="container-fluid admin">
      <div className="row">
        {/* Sidebar Component */}
        <div className="col-lg-3">
          <AdminSidebar />
        </div>
        <div className="col-lg-9">
          <h1>Product List </h1>
          <p>This is the product List.</p>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Model</th>
                  <th scope="col">Description</th>
                  <th scope="col">Condition</th>
                  <th scope="col">AuctionDate</th>
                  <th scope="col">AuctionTime</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {productListdata.length !== 0 ? productListdata.map((product, i) => {
                  return (<tr key={i}>
                    <th scope="row">{calculateRowNumber(i)}</th>
                    <td>{product.title}</td>
                    <td><img src={product.image} style={{ "width": "4rem" }} /></td>
                    <td>{product.price}</td>
                    <td>{product.model}</td>
                    <td>{product.description}</td>
                    <td>{product.condition}</td>
                    <td>{product.auctionDate}</td>
                    <td>{product.auctionTime}</td>
                    <td><img src={DeleteIcon} style={{ "width": "1rem" }} onClick={() => deleteProduct(product._id)}></img></td>
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

export default ProductList

