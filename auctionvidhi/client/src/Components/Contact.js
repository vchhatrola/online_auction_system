
import React, { useState } from "react";
import '../App.css'

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
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required placeholder='name' />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required placeholder='Email'/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" required placeholder='massage'/>

                <button type="submit">{status}...Submit</button>
            </form>
        </div>
    );
};

export default Contact;