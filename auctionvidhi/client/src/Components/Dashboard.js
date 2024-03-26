
import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.get('http://localhost:3000/auth/verify')
            .then(res => {
                if (!res.data.status) {
                    // User is not authenticated, navigate to home page
                    navigate('/')
                }
            })
            .catch(error => {
                // Handle error
                console.error('Error verifying authentication:', error);
                // Optionally, you may want to navigate to an error page or display a message to the user
            });
    }, [navigate])

    return (
        <div>
            dashboard
        </div>
    )
}

export default Dashboard
