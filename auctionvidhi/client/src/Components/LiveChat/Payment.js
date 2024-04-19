import React from 'react'
import QRcode from '../../images/QRcode.png';

const Payment = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Make a Payment</h1>
          <p className="text-center">Please scan the QR code below to make your payment.</p>
          <div className="text-center">
            <img src={QRcode} alt="QR code" style={{ "width": "10rem" }} />
            <p>Once the payment is completed, your Bid order will be processed. Send me Your Payment receipt in this email id <b>chhatrolavidhi@gmail.com</b>. i will contact you.   Thank you!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment




