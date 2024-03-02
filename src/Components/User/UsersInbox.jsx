import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import InputEmoji from "react-input-emoji";
import axios from "axios"; // Uncomment this line if needed
import Chat from "./Chat/Chat";
import Conversation from "./Chat/Conversation";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { baseURL } from "../Api/Url";


const UsersInbox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [recipient, setRecipient] = useState();
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const isMessageProcessed = useRef(false);


  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;

  const { id } = useParams();
  const { name } = useParams();
  const selectedUser = id;
  const [chatter, setChatter] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          `${baseURL}account/get-messages/${userId}/${id}/`
        );
        

        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await response.json();
        console.log(data,"ekjvwgyurwtgjerwgr")
        setChatter(data[0]?.receiver_profile.username);
        console.log(chatter)
        console.log("here giving the response", data);
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, [userId, id]);

  useEffect(() => {
    const newSocket = new WebSocket("wss://shoemee.shop/ws/chat/ABC/"); // Replace "ABC" with the appropriate identifier

    newSocket.onopen = () => {
      isMessageProcessed.current = false;
      console.log("WebSocket connection established");
    };

    newSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "users") {
        console.log("hereeeeeee");
        console.log("here neGFTFTTVGC", data);
        setUsers(data.users);
      } else if (data.type === "message") {
        const newMessage = {
          sender: data.sender.id,
          recipient: selectedUser,
          content: data.message,
          timestamp: data.timestamp,
        };

        if (
          !isMessageProcessed.current &&
          !messages.some(
            (msg) =>
              msg.sender === newMessage.sender &&
              msg.recipient === newMessage.recipient &&
              msg.content === newMessage.content
          )
        ) {
          isMessageProcessed.current = true;
          console.log("entering in the console for the times");
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      }
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(newSocket);

    // Cleanup function
    return () => {
      newSocket.close();
    };
  }, [userId, id, messages]);

  ///messages test
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  const sendMessage = () => {
    if (selectedUser && socket && message.trim() !== "") {
      let newMessage = {
        sender: userId,
        recipient: selectedUser,
        content: message,
      };

      try {
        const data = {
          sender: userId,
          recipient: selectedUser,
          message: message,
        };

        const jsonString = JSON.stringify(data);
        socket.send(jsonString);
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      console.log("Recipient or socket is not available!");
    }
  };
  useEffect(() => {
    console.log("message", messages);
  }, []);

  // const handleVideo =()=>{
  //   navigate('/video')
  // }
  
  const handleVideo = () => {

    


    navigate('/app/video')
    
    const videoConferenceLink = `http://localhost:5173/room/123`;
  
    // Append a message with the video conference link
    const videoConferenceMessage = `Let's join the video conference! Click [here](${videoConferenceLink}) to join.`;
  
    // Send the video conference message
    sendMessage(videoConferenceMessage);
  };
  
  // const sendMessage = () => {
  //   console.log("here")
  //   if (id && socket && message.trim() !== "") {
  //     let newMessage;

  //     if (selectedUser) {
  //       console.log("here getting", id);
  //       newMessage = {
  //         sender: userId,
  //         recipient: selectedUser,
  //         content: message,
  //       };
  //       console.log(newMessage);
  //     } else {
  //       console.log("No selected user!");
  //       return;
  //     }

  //     if (!messages.some((msg) => msg.content === newMessage.content)) {
  //       setMessages((prevMessages) => [...prevMessages, newMessage]);
  //     }

  //     try {
  //       const data = {
  //         sender: userId,
  //         recipient: selectedUser,
  //         message: message,
  //       };
  //       console.log(data);
  //       const jsonString = JSON.stringify(data);
  //       console.log(jsonString);
  //       socket.send(jsonString);
  //       setMessage("");
  //     } catch (error) {
  //       console.error("Error sending message:", error);
  //     }
  //   } else {
  //     console.log("Socket connection is not opened!!!");
  //   }
  // };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="container relative grid grid-cols-[25%,auto] gap-4">
        {/*Left saide */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4  shadow-xl rounded-xl p-4 h-auto min-h-[80vh] overflow-y-scroll">
            <h1 className="font-semibold">Chat</h1>
            <div>
              <Conversation data ={message} />
            </div>
             {/* {messages?.length === 0 ? (
              <p>No messages yet. Start a new conversation!</p>
            ) : (
              <div>
                <Conversation data={message} />
              </div>
            )} */}
          </div>
        </div>

        {/*Right side */}
        <div className="flex flex-col gap-4">
          {/* <Chat/> */}
          <div
            className=" bg-opacity-60 shadow-xl rounded-lg grid grid-rows-[14vh,60vh,13vh]
"
          >
            <div
              className="
                        flex
                        flex-row
                        justify-between
                        items-center
                        rounded-md
                        p-4
                        hover:bg-gray-300
                        cursor-pointer
                        "
            >
              <div className="flex  justify-between  w-full items-center gap-1">
                <div className="flex items-center">
                  <div className="flex items-center justify-center bg-cyan-700 rounded-full  w-12 h-12 ">
                    <span className="font-semibold text-2xl capitalize text-white">
                      {/* {chatter[0]} */}
                    </span>
                    
                  </div>

                  <h1 className="px-3 font-semibold capitaliz">{name}</h1>
                </div>

                <div>
                  {/* <FaVideo onClick={handleVideo} className=" w-11 h-8 text-cyan-700" /> */}
                  <Link to="/app/video" target="_blank" rel="noopener noreferrer"><FaVideo  className=" w-11 h-8 text-cyan-700" /></Link>
                  {/* <FaVideo  href="https://www.w3schools.com/tags/tag_a.asp" target="_blank" className=" w-11 h-8 text-cyan-700" /> */}
                </div>
              </div>
            </div>

            <hr />
            {/*chat body*/}

            {/*chat sender*/}
            <div className="h-[76.5%] absolute top-28 w-[73.7%] ">
              <div className="absolute top-0 flex-grow  max-h-full w-full overflow-y-auto">
                <div className="flex flex-col space-y-2 p-4">
                  {messages?.map((msg, index) => (
                    <div
                      key={index}
                      className={`${(() => {
                        // console.log(
                        //   "her msg.sender",
                        //   msg?.sender,
                        //   "userId",
                        //   userId,
                        //   msg?.content
                        // );
                        return msg?.sender == userId
                          ? "self-end justify-end"
                          : "self-start justify-end";
                      })()} bg-${
                        msg?.sender == userId ? "cyan-700" : "gray-200"
                      } text-red rounded-lg p-2 flex items-center`}
                    >
                      <span className="material-icons mr-2"></span>

                      <p>{msg?.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* chat-sender */}
            <div className="  flex justify-start items-center gap-4 rounded-md self-start w-full mt-16 ">
              {/* <InputEmoji
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              
            /> */}
              <input
                className="w-[90%] h-8 border border-cyan-700 rounded-xl "
                type=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div
                onClick={() => sendMessage()}
                className="flex items-center justify-center text-white border-none rounded-xl
              bg-cyan-700 transition-all duration-100 ease-out p-2 cursor-pointer"
              >
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersInbox;
