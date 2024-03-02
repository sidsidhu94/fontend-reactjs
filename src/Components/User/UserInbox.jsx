import React, { useState, useEffect, useRef } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [recipient, setRecipient] = useState('John Doe');
  // const [recipientImage, setRecipientImage] = useState('https://example.com/recipient-image.jpg');
  
  const ws = useRef(null);

  useEffect(() => {
    // Connect to WebSocket when the component mounts
    ws.current = new W3CWebSocket('ws://your-backend-url'); 
    // ws.current = new W3CWebSocket(`ws://localhost:8000/ws/chat/${sender_id}/${receiver_id}/`);
    // ws.current = new W3CWebSocket(`ws://localhost:8000/ws/chat/`);

    

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (message) => {
      const data = JSON.parse(message.data);
      // Handle incoming WebSocket messages
      // For example, update the state with the received message
      setMessages((prevMessages) => [...prevMessages, { text: data.message, sender: data.sender }]);
    };

    ws.current.onclose = () => {
      console.log('WebSocket closed');
    };

    // Close WebSocket connection when the component unmounts
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []); // Run this effect only once when the component mounts

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      type: 'chat.message',
      message: newMessage,
      sender: 'user',
    };

    // Send message to the WebSocket server
    ws.current.send(JSON.stringify(message));

    // Update the state with the sent message
    setMessages((prevMessages) => [...prevMessages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
  };


  return (
    <div className="flex flex-col h-screen ">
      <div className="border-b-2 border-gray-200 p-4">
        <div className="flex items-center">
          <img
            // src={recipientImage}
            alt="Recipient"
            className="w-8 h-8 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold text-lg">{recipient}</p>
            {/* Add additional details like online status or other information here */}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === 'user' ? 'items-end justify-end' : 'items-start'
              }`}
            >
              <div
                className={`${
                  message.sender === 'user' ? 'bg-cyan-700 text-white rounded-br-none' : 'bg-gray-300 text-gray-600'
                } p-3 max-w-md rounded-lg inline-block`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 py-2 px-4 border rounded-full mr-2 focus:outline-none focus:border-cyan-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-cyan-700 text-white rounded-full p-2 hover:bg-cyan-400 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
