
import React, { useState } from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        // e.preventDefault();
        setStatus("Sending...");
        // const { name, email, message } = e.target.elements;
        // let details = {
        //     name: name.value,
        //     email: email.value,
        //     message: message.value,
        // };
        let response = await fetch("http://localhost:3000/auth/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
        });
        setStatus("Submit")
        reset();

        let result = await response.json();
        toast(result.status);
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="text-center mb-4">Contact Us</h2>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Name" {...register("name", { required: true })} />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder="Email" {...register("email", { required: true })} />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="3"   {...register("message", { required: true })} ></textarea>
                                    {errors.message && <span className="text-danger">This field is required</span>}
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">{status}</button>
                                <Link to="/home" className="ml-2">Back</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;