import React, { useEffect } from 'react';
import axios from 'axios'
import { Navigate, useParams} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const EditProfile = () => {

    const {id} = useParams()
    const { register, handleSubmit, formState: { errors },setValue } = useForm();
    useEffect(() => {
        axios.get(`http://localhost:3000/auth/signup/${id}`)
          .then(response => {
            console.log(response.data, "response auction detail");
            if (response.data) {
                const userData = response.data.data;
                    // Set form values using setValue
                    //console.log(productData.auctionDate,"hii")
                   // setValue("userDate", formatDate(userData.userDate));
                    // setValue("auctionDate", formatDate(productData.auctionDate));
                    Object.keys(userData).forEach(key => {
                        setValue(key, userData[key]);
                    });
            //   setProduct(response.data.data);
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);
      const onSubmit = (data) => {
        data._id = id; // Add the user ID to the data
        axios.post(`http://localhost:3000/auth/editProfile/${id}`, data)
            .then(response => {
                toast(response.data.message);
                if (response.data.status) {
                Navigate('/home')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    
    // const handleSubmit1 = async (event) => {
    //     event.preventDefault();

    //     axios.post(`http://localhost:3000/auth/editprofile+${id}`, {
    //         name,
    //         email
            
    //     })
    //         .then((response) => {
    //             if (response.data.status) {
    //                 navigate('/home');
    //             }
    //         }).catch((err) => {
    //             console.log(err);
    //             setError(err.message);
    //         });
    // };

    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card mt-5">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-center mb-4">Edit Profile</h2>
                            <div className="form-group  mb-2"> 
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Username"
                                    {...register("username", { required: true })} />
                                {errors.username && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group  mb-2">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                                    {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            
                            <div className="form-group  mb-2">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="First Name"
                                    {...register("firstName", { required: true })} />
                                {errors.firstName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group  mb-2">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Last Name"
                                    {...register("lastName", { required: true })} />
                                {errors.lastName && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group  mb-2">
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
                            <div className="form-group  mb-2">
                                <label htmlFor="address">Address</label>
                                <textarea className="form-control" id="address" rows="3"  {...register("address", { required: true })}></textarea>
                                {errors.address && <span className="text-danger">This field is required</span>}
                            </div>
                            
                            <div className="form-group  mb-2">
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
                           
                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default EditProfile;