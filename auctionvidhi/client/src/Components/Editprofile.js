import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate ,useParams} from 'react-router-dom';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
   
    const [error, setError] = useState(null);

    const {id} = useParams()

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        axios.post(`http://localhost:3000/auth/editprofile+${id}`, {
            name,
            email
            
        })
            .then((response) => {
                if (response.data.status) {
                    navigate('/home');
                }
            }).catch((err) => {
                console.log(err);
                setError(err.message);
            });
    };

    return (
        <div className='sign-up-container1'>
            <form className='sign-up-form1' onSubmit={handleSubmit}>
                <h2>Edit Profile</h2>
                <label htmlFor="name"> Name</label>
                <input type="text" placeholder='Name' onChange={(event) => setName(event.target.value)} />

                <label htmlFor="email" > Email </label>
                <input type="email" placeholder='email' onChange={(event) => setEmail(event.target.value)} />

               
                {error && <p>{error}</p>}
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditProfile;