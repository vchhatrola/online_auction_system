import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const ResetPassword = () => {
    const [password, setPassword] = useState("")
    const { token } = useParams()


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3000/auth/reset-password/' + token, {

            password,

        }).then(response => {
            //console.log(response)
            if (response.data.status) {

                navigate('/login')
            }
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })

    };


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-center mb-4">New Password</h2>
                                <div className="form-group  mb-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type='submit' className="btn btn-primary mt-3">Reset</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default ResetPassword
