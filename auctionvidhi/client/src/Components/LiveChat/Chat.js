
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import DisplayNumber from "./DisplayNumber";
import { Link } from "react-router-dom";


function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [enteredNumbers, setEnteredNumbers] = useState([]);

  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);

      const numbers = data.message.match(/\b\d+\b/g);
      if (numbers) {
        setEnteredNumbers((prevNumbers) => [...prevNumbers, { username: data.author, numbers }]);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
              key={index}
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>&#9658;</button>

      </div>

      {/* <div className="displayed-numbers"> */}
      <div style={{ position: 'fixed', top: 0, right: 0, width: '150px', padding: '10px', backgroundColor: '#fff', zIndex: 1000 }}>

        Name:{username}<br />
        price:
        {enteredNumbers
          .flatMap(entry => entry.numbers.map(number => ({ username: entry.username, number })))
          .sort((a, b) => b.number - a.number)
          .map((entry, index) => (
            <DisplayNumber key={index} username={entry.username} number={entry.number} />
          ))}

      </div><br></br>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p style={{ marginRight: '50px' }}><Link to="/Payment">Payment</Link></p>
        <Link to="/Exit">Exit</Link>
      </div>


    </div>

  );
}

export default Chat;

