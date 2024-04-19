import React, { useEffect, useState } from 'react'
import AdminSidebar from './AdminSidebar'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const AuctionBidList = () => {
  const [productListdata, setProductList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchproduct()
  }, [offset, perPage]);
  const fetchproduct = () => {
    axios.get(`http://localhost:3000/api/getAuctionBid`).then(response => {
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

  return (
    <div className="container-fluid admin">
      <div className="row">

        <div className="col-lg-3">
          <AdminSidebar />
        </div>
        <div className="col-lg-9 mb-5 mt-3">
          <h1>Product List </h1>
          <div className="table-responsive">
            <table className="table table-striped mb-4">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Model</th>
                  <th scope="col">AuctionBidPrice</th>
                  <th scope="col">AuctionDate</th>
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
                    <td>{product.auctionBidPrice}</td>
                    <td>{product.auctionDate}</td>
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

export default AuctionBidList

