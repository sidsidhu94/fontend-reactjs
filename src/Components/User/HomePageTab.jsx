import React from "react";
import { IoHeart } from "react-icons/io5";
import { PiUsersFill } from "react-icons/pi";

const HomePageTab = () => {
  return (
    <div>
      <div className="w-full  h-24 flex items-end  text-xl border-b-2 ">
        <div className="flex text-zinc-500 items-center gap-1 ml-5">
          <IoHeart />
          <h1>For You</h1>
        </div>
        <div className=" flex justify-center items-center h-8 w-14 opacity-25">
            <div className="w-1 h-5 bg-zinc-400"></div>
        </div>
        
        
        <div className="flex items-center text-zinc-500 gap-1 ">
        <PiUsersFill />

        <h1>Following</h1>
        </div>

        
      </div>
    </div>
  );
};

export default HomePageTab;
