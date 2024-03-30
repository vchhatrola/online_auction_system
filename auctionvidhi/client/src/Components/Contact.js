
import React, { useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";


const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/auth/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        // <div className='sign-up-container'>
        //     <form className='sign-up-form' onSubmit={handleSubmit}>
        //         <h2>Contact Us</h2>
        //         <label htmlFor="name">Name:</label>
        //         <input type="text" id="name" required placeholder='name' />

        //         <label htmlFor="email">Email:</label>
        //         <input type="email" id="email" required placeholder='Email'/>

        //         <label htmlFor="message">Message:</label>
        //         <textarea id="message" required placeholder='massage'/>

        //         <button type="submit">{status}...Submit</button>
        //     </form>
        // </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-center mb-4">Contact Us</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea class="form-control" id="message" rows="3"  ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">{status}...Submit</button>
                                <Link to="/home" className="ml-2">Home Page</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;