import React, { useState } from 'react';
import io from 'socket.io-client';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import Chat from './Chat';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const socket = io('http://localhost:3000', { transports: ['websocket', 'polling', 'flashsocket'] });

const ChatMain = () => {
  let userDetail = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [showChat, setShowChat] = useState(false);

  const joinRoom = (data) => {
    data._id = userDetail._id
    Axios.post("http://localhost:3000/auth/chatJoin", data).then(response => {
      toast(response.data.message)
      localStorage.setItem("chatUser", JSON.stringify(response.data.user))
      if (response.data.status) {
        socket.emit("join_room", data.room);
        setShowChat(true);
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
              {!showChat ? (<form onSubmit={handleSubmit(joinRoom)}>
                <h2 className="text-center mb-4">Join A Chat</h2>
                <div className="form-group mb-2">
                  <label htmlFor="username">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Enter your name"
                    {...register("username", { required: true })}
                  />
                  {errors.username && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="room">Room ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="room"
                    placeholder="Enter room ID"
                    {...register("room", { required: true })}
                  />
                  {errors.room && <span className="text-danger">This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Join</button>

              </form>) : (
                <Chat socket={socket} username={getValues('username')} room={getValues('room')} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatMain;
