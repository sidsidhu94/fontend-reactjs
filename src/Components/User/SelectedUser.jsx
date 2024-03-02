import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import FollowButton from "./FollowButton";
// import { useState } from "react";

const SelectedUser = ({profile}) => {
  
  const navigate = useNavigate()
  console.log(profile,"nidhin testing ........")
  
  function handleSubmit(id,name){
    // navigate(`/inbox/${id}`)
    navigate(`/app/inbox1/${id}/${name}`)
  }
  
  
  return (
    <>
      <div className="basis-[16%]">
        <div className="border border-stone-200 h-96 w-72 mt-16 ml-5 p-5 overflow-hidden drop-shadow rounded-lg">
          <div className=" h-24 w-full">
            <div className="avatar">
              <div className="w-24 rounded-full ml-20 ">
                <img
                  src={profile.profile_pic}
                  onError={() => console.log("Image failed to load")}
                />
              </div>
            </div>
          </div>
          <div>
            <h1
              className="font-bold text-center text-cyan-700  mt-5 "
              style={{ textTransform: "uppercase" }}
            >
              {profile.username}
            </h1>
          </div>
          <div>
            <h1
              className="font-bold text-center  text-cyan-700 mt-2"
              style={{ textTransform: "uppercase" }}
            >
              {profile.country}
            </h1>
          </div>
          <p className="line-clamp-3 text-center text-zinc-500 uppercase">
            {profile.description}
          </p>
          <p className="line-clamp-3 text-center text-zinc-500 uppercase">
            Skill:{profile.skills}
          </p>
          {/* <button className="btn btn-wide mt-3 bg-cyan-700 btn-circle text-cyan-500">
            Follow
          </button> */}
          <FollowButton userAccountId = {profile.user_id }/>

          {/* <button
      className={`btn btn-wide mt-3 ${isFollowing ? 'bg-red-500' : 'bg-cyan-700'} btn-circle text-cyan-500`}
      onClick={handleFollowToggle}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button> */}

          <button onClick={()=>handleSubmit(profile.user_id,profile.username)} className="btn btn-wide mt-3 bg-zinc-300 btn-circle ">
            Message
          </button>
        </div>

        <div className="border border-stone-200 h-36 w-72  ml-5 p-5 mt-7 overflow-hidden drop-shadow rounded-lg">
          <div className="flex justify-between">
            <p className="text-zinc-500">Appreciation </p>
            <p className="text-zinc-500">100k</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-zinc-500">Followers</p>
            <p className="text-zinc-500">5k</p>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-zinc-500">Following</p>
            <p className="text-zinc-500">500</p>
          </div>
        </div>
        {/* <button className="btn btn-wide mt-3 ml-8 bg-cyan-700 btn-circle text-cyan-500">
          Unlock Premuim
        </button> */}
      </div>
    </>
  );
};

export default SelectedUser;
