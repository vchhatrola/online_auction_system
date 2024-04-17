import React from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data, "data");
        Axios.post("http://localhost:3000/auth/signup", data).then(response => {
            toast(response.data.message)
            if (response.data.status) {
                navigate('/')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="text-center mb-4">Sign Up</h2>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Username"
                                        {...register("username", { required: true })} />
                                    {errors.username && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                        {...register("email", { required: true })} />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password1">Password</label>
                                    <input type="password" className="form-control" id="password1" placeholder="Password"
                                        {...register("password", { required: true })} />
                                    {errors.password && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="First Name"
                                        {...register("firstName", { required: true })} />
                                    {errors.firstName && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name"
                                        {...register("lastName", { required: true })} />
                                    {errors.lastName && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="text" className="form-control"  id="phoneNumber"  placeholder="Phone Number"
                                        {...register("phoneNumber", 
                                        {  required: "This field is required", 
                                            pattern: {
                                            value: /^[0-9]{10}$/,
                                            message: "Please enter a 10-digit number."
                                        } })}
                                    />
                                    {errors.phoneNumber && (
                                        <span className="text-danger">{errors.phoneNumber.message}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <textarea className="form-control" id="address" rows="3"  {...register("address", { required: true })}></textarea>
                                    {errors.address && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="registrationDate">Registration Date</label>
                                    <input type="date" className="form-control" id="registrationDate" placeholder="Registration Date"
                                        {...register("registrationDate", { required: true })} />
                                    {errors.registrationDate && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adharCardNumber">Adhar Card Number</label>
                                    <input type="text" className="form-control"  id="adharCardNumber"  placeholder="Adhar Card Number"
                                        {...register("adharCardNumber", 
                                        {  required: "This field is required", 
                                            pattern: {
                                            value: /^[0-9]{12}$/,
                                            message: "Please enter a 12-digit number."
                                        } })}
                                    />
                                    {errors.adharCardNumber && (
                                        <span className="text-danger">{errors.adharCardNumber.message}</span>
                                    )}
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("termCondition", { required: true })} />
                                    <label className="form-check-label" htmlFor="exampleCheck1" > I agree <Link to="/termsandconditions">terms and conditions</Link></label>
                                    {errors.termCondition && <span className="text-danger">This field is required</span>}
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                <p className="mt-2">Have an account? <Link to="/">Login</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup


