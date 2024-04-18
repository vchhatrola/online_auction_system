import React from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';
 
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    const isLogedIn= localStorage.getItem("isAuthenticate")
    if(isLogedIn === "true"){
      navigate('/home');
    }
  }, ); //}, []);
  const onSubmit = (data) => {
    console.log(data, "data");
    Axios.post("http://localhost:3000/auth/login", data)
      .then(response => {
        console.log(response.data,"response")
        toast(response.data.message);
        if (response.data.status) {
          console.log(response.data)
          localStorage.setItem("user",JSON.stringify(response.data.user))
          localStorage.setItem("token",response.data.token)
          localStorage.setItem("isAuthenticate",true)
          navigate('/home');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container">
  
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center mb-4">Login</h2>
                <div className="form-group mb-2">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    {...register("email", { required: true })} />
                  {errors.email && <span className="text-danger">This field is required</span>}
                  
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    {...register("password", { required: true })} />
                  {errors.password && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-check mb-2">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("termCondition", { required: true })} />
                  <label className="form-check-label" htmlFor="exampleCheck1" > I agree <Link to="/termsandconditions">terms and conditions</Link></label>

                </div>
                {errors.termCondition && <span className="text-danger">This field is required</span>}
                <button type="submit" className="btn btn-primary mt-3 mb-2">Submit</button> 
                <Link to="/forgotpassword" className="ml-2">Forgot password?</Link> 
                <p className="mt-2">Don't have an account? <Link to="/signup">Sign up</Link></p> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;