import React,{useState} from "react";
import { Textarea,Input,Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../Api/Url";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PostWorkDisplay = () => {
  const { state } = useLocation();
  const { itemdata } = state;
  console.log(itemdata);


  return (
    <div className="  mx-auto mt-32 border w-[800px] rounded-lg  shadow-2xl">
      <div className="text-center mb-5 flex flex-row justify-center items-center font-extrabold text-5xl text-cyan-700 p-4 gap-3">
        <img src="/job.png" alt=""  className="w-10 h-10"/>
       We are looking for  

      </div>
      <hr className="m-6"/>
      
    <div className=" mb-5  ml-4 font-semibold text-start text-xl text-cyan-700 capitalize">
      Job Role :<span className="text-black font-normal"> {itemdata.jobcaption}</span>
    </div>
    <div className="text-start ml-4 mb-5 font-semibold text-xl text-cyan-700 capitalize">
      Job Requirements :<span className="text-black font-normal"> {itemdata.requirements}</span>
    </div>
    <div className="text-start ml-4 mb-5 font-semibold text-xl text-cyan-700 capitalize">
      Your Experiance:<span className="text-black font-normal"> {itemdata.experiance}</span>
    </div>
    <div className="text-start ml-4 mb-5 font-semibold text-xl text-cyan-700 capitalize">
      Job Description :<span className="text-black font-normal"> {itemdata.jobdescription}</span>
    </div>

    
    
    
      <div className="flex justify-center ">
     

      </div>
      
    </div>
  );
};

export default PostWorkDisplay;
