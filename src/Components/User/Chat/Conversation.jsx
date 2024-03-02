import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Api/Url";

const Conversation = ({data}) => {
    console.log(data)
  const [userData, setUserData] = useState([]);

  const [chatter, setChatter] = useState("");


  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseURL}account/user-messages/${userId}/`);
        console.log(response)
        setUserData(response.data); 
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []); 

  const navigate = useNavigate()
//   console.log(profile,"nidhin testing ........")
  
  function handleSubmit(id,name){
    // navigate(`/inbox/${id}`)
    navigate(`/app/inbox1/${id}/${name}`)
  }
  

  return (
    <>
      {/* Display user data in your component */}
      {userData.map((user) => (
        
        <div
        onClick={()=>handleSubmit(user.user_id,user.user_profile.username)}
            
          key={user.user_id}
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
          <div className="flex flex-row items-center gap-1">
            <div
              className="flex items-center justify-center bg-cyan-700 rounded-full  w-12 h-12 "
            >
              <span className="font-semibold text-2xl capitalize text-white ">{user.user_profile.username[0]}</span>
            </div>

            <div
              className="
                flex
                flex-col
                justify-start
                items-center
                text-sm
              "
            >
              <span className="font-semibold capitalize">{user.user_profile.username}</span> 
              
            </div>
          </div>
        </div>
      ))}
      <hr />
    </>
  );
};

export default Conversation;
