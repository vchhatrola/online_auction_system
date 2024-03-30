import React, { useState } from 'react'
import '../App.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Forgotpassword = () => {
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:3000/auth/forgot-password", {

            email,

        }).then(response => {
            //console.log(response)
            if (response.data.status) {
                alert("check your email for reset password link")
                navigate('/login')
            }

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
                                <h2 className="text-center mb-4">Forgot Password</h2>
                                {/* <label htmlFor="email">Email</label>
                                <input type="email" autoComplete='off' placeholder='Email'
                                    onChange={(e) => setEmail(e.target.value)} /> */}
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder="Email"
                                     onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <button type='submit' className="btn btn-primary mt-3">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgotpassword
