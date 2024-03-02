import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const VideoCall = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate()

  const handleJoinRoom = useCallback(() =>{
        navigate(`/app/room/${value}`)
  },[navigate,value])

  return (
    <div>
      <input value = {value} type="text" placeholder="Enter room Code" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={handleJoinRoom} >Join</button>
    </div>
  );
};

export default VideoCall;
