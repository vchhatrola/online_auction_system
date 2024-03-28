// import React, { useState } from 'react'
// import '../App.css'
// import Axios from 'axios'
// import { Link, useNavigate } from 'react-router-dom'
// import { useForm } from 'react-hook-form'


// const Login = () => { 
//   const navigate = useNavigate()
//   const { register, handleSubmit,  formState: { errors } } = useForm();
//   Axios.defaults.withCredentials = true;
//   const onSubmit = (data) => {
//     console.log(data,"data");
//     Axios.post("http://localhost:3000/auth/login",  data ).then(response => {
//       if (response.data.status) {
//         navigate('/')
//       }
//     }).catch(err => {
//       console.log(err)
//     })
//   }
//   return (
//     <div className='sign-up-container'>

//       <form className='sign-up-form' onSubmit={handleSubmit(onSubmit)}>
//         <h2>Login</h2>

//         <label htmlFor="email">Email</label>
//         <input type="email" autoComplete='off' placeholder='Email'
//          {...register("email",{ required: true })} />
//            {errors.email && <span className="text-danger">This field is required</span>}
//         <br/>
//         <label htmlFor="password">Password</label>
//         <input type="password" placeholder='******'
//             {...register("password",{ required: true })} />
//         {errors.password && <span className="text-danger">This field is required</span>}
//         <label >
//           <input type="checkbox" name="termCondition"  {...register("termCondition",{ required: true })} />
//           I agree <Link to="/termsandconditions">terms and conditions</Link>
//           {errors.termCondition && <span className="text-danger">This field is required</span>}
//         </label>

//         <button type='submit'>Login</button>
//         <Link to="/forgotpassword">Forgot password?</Link>
//         <p>don't Have account? <Link to="/signup">Sign up</Link></p>
//       </form>
//     </div>
//   )
// }

// export default Login
import React from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  Axios.defaults.withCredentials = true;

  const onSubmit = (data) => {
    console.log(data, "data");
    Axios.post("http://localhost:3000/auth/login", data)
      .then(response => {
        if (response.data.status) {
          navigate('/');
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
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                    {...register("email", { required: true })} />
                  {errors.email && <span className="text-danger">This field is required</span>}
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    {...register("password", { required: true })} />
                  {errors.password && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("termCondition", { required: true })} />
                  <label className="form-check-label" htmlFor="exampleCheck1" > I agree <Link to="/termsandconditions">terms and conditions</Link></label>
                  {errors.termCondition && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button> {/* Adjusted margin top */}
                <Link to="/forgotpassword" className="ml-2">Forgot password?</Link> {/* Added margin left */}
                <p className="mt-2">Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Adjusted margin top */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
