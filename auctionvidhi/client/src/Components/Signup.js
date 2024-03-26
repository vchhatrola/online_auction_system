/*import React ,{useState} from 'react'
import '../App.css'
import Axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/signup', {  //never change port number
            username,
            email,
            password,
        }).then(response =>{
            if(response.data.status){
           // console.log(response)
           navigate('/login')
            } 

        }).catch(err => {
            console.log(err)
          })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder='******'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
                <p>Have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Signup */

//blackbox code

import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [adharCardNumber, setAdharCardNumber] = useState('');
    const [checked, setChecked] = useState(false);
   


    const navigate = useNavigate();

   const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/auth/signup', {
            username,
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            registrationDate,
            adharCardNumber,

        }).then((response) => {
            if (response.data.status) {
                navigate('/login');
            }
        }).catch((err) => {
            console.log(err);
        });
    };
  
    const handleChange = (e) => {
        // Allow only numeric characters
        const input = e.target.value.replace(/\D/g, '');
        setAdharCardNumber(input);
    };
    const handleChange1 = (e) => {
        // Allow only numeric characters
        const input = e.target.value.replace(/\D/g, '');
        setPhoneNumber(input);
    };
    

    return (
        <div className='sign-up-container1'>
            <form className='sign-up-form1' onSubmit={handleSubmit} >
                <h2>Sign Up</h2>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder='Username' required
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" autoComplete='off' placeholder='Email' required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder='******' required
                    onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder='First Name' required
                    onChange={(e) => setFirstName(e.target.value)} />

                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder='Last Name' required
                    onChange={(e) => setLastName(e.target.value)} />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" placeholder='Phone Number' required
                    maxLength="10"
                    value={phoneNumber}
                    onChange={handleChange1}
                
                />

                
                <label htmlFor="address">Address<textarea type="text" cols="30" rows="6" placeholder='Address'
                    onChange={(e) => setAddress(e.target.value)} required></textarea></label>

                <label htmlFor="registrationDate">Registration Date</label>
                <input type="date" placeholder='Registration Date' required
                    onChange={(e) => setRegistrationDate(e.target.value)} />

                <label htmlFor="adharCardNumber">Adhar Card Number</label>
                <input type="text" placeholder='Adhar Card Number' required
                    maxLength="12"
                    value={adharCardNumber}
                    onChange={handleChange}
                />

                <label >
                    <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    I agree <Link to="/termsandconditions">terms and conditions</Link>
                </label>

                <button type='submit' disabled={!checked}>Sign Up</button>
                <p>Have an account? <Link to="/login">Login</Link></p>
            </form>
           
        </div>
    );
};

export default Signup


