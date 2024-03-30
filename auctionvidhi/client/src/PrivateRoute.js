import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isLogedIn= localStorage.getItem("isAuthenticate")
  return  isLogedIn== "true"? children:<Navigate to="/" replace/>
}

export default PrivateRoute
