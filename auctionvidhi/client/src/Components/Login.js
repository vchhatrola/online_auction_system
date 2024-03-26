import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => { 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate()

  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post("http://localhost:3000/auth/login", {
      email,
      password,
    }).then(response => {
      if (response.data.status) {
        navigate('/')
      }
    }).catch(err => {
      console.log(err)
    })

  };
  return (
    <div className='sign-up-container'>

      <form className='sign-up-form' onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input type="email" autoComplete='off' placeholder='Email'
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder='******'
          onChange={(e) => setPassword(e.target.value)} />

        <label >
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
          I agree <Link to="/termsandconditions">terms and conditions</Link>
        </label>

        <button type='submit' disabled={!checked}>Login</button>
        <Link to="/forgotpassword">Forgot password?</Link>
        <p>don't Have account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  )
}

export default Login
