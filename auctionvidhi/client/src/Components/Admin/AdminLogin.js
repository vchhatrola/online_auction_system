import React from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    const isLogedIn = localStorage.getItem("isAdminAuthenticate")
  },);
  const onSubmit = (data) => {
    console.log(data, "data");
    Axios.post("http://localhost:3000/admin/Adminlogin", data)
      .then(response => {
        console.log(response.data, "response")
        toast(response.data.message);
        if (response.data.status) {
          localStorage.setItem("isAdminAuthenticate", true)
          navigate('/AdminDashboard');
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
                <h2 className="text-center mb-4">Admin Login</h2>
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
                <button type="submit" className="btn btn-primary mt-3 mb-3">Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin