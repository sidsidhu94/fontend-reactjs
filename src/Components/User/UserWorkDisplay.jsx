import { React, useEffect, useState } from "react";

import { BiSolidLike } from "react-icons/bi";
import Comment from "./Comment";
import axios from "axios";
import { useSelector } from "react-redux";
import toast,{Toaster} from 'react-hot-toast'
import { baseURL } from "../Api/Url";


const UserWorkDisplay = (props) => {
  console.log(props,"propssssssssssss");
  // const [WorkDisplay, setWorkDisplay] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const { modalClose, clickedWork } = props;

  useEffect(() => {
    console.log(clickedWork.work_appreciation.length, "likesss");
    setLikes(clickedWork.work_appreciation.length);
  }, []);

  // console.log(likes,"tom testing efegrf")

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;

  console.log(clickedWork.id, "just testing here for confirming ");

  const appreciateWork = async (workId) => {
    try {
      const response = await axios.post(
        `${baseURL}account/appreciate/${workId}/`,
        { userId }
      );
      return response;
    } catch (error) {
      console.error("Error:", error);

      throw error;
    }
  };

  const verify = async()=>{
    
    const workId = clickedWork.id;
    const res = await axios.post(`${baseURL}account/verify-work/${workId}/`)
    if (res.status === 200){
      toast.success("Verified")
      modalClose(false)
    }

  }
  const reject = async()=>{
    
    const workId = clickedWork.id;
    const res = await axios.post(`${baseURL}account/reject-work/${workId}/`)
    if (res.status === 200){
      toast.success("rejected")
      modalClose(false)
    }

  }

  const handleClick = async () => {
    try {
      const workId = clickedWork.id;
      const data = await appreciateWork(workId);
      console.log(data, "dattaaaaa");

      setLikes(data.data.likes_count);
      console.log("Likes:", data.data.likes_count);

      // You can perform further UI updates here
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <dialog
      id="my_modal_1"
      className="modal w-[70%] mx-auto  h-screen overflow-y-scroll bg-black  "
    >
      <div className=" h-auto  bg-white ">
        {/* {clickedWork.images.map((data)=>(<img  src={data.image} alt="" />))} */}
        <div className="h-full">
          <div className="w-full bg-red-400 flex justify-end">
            <button
              onClick={() => modalClose(false)}
              className="btn justify-end ms-auto absolute r-0"
            >
              X
            </button>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-cyan-700 text-center ">
              {clickedWork.work_caption}
            </p>
            <h1>{clickedWork.work_description}</h1>
          </div>
          {clickedWork.images.map((data) => (
            <img
              fill
              key={data.image}
              src={data.image}
              alt=""
              className="w-screen h-screen "
            />
          ))}
        </div>
        <div>
        {props.role !== "admin" ? (
            <>
              <div className="w-full h-[10rem] flex justify-center">
                <button
                  className={`like-button ${isClicked && "liked"} `}
                  // onClick={handleClick}
                >
                  <BiSolidLike
                    onClick={handleClick}
                    className="text-cyan-700 text-8xl"
                  />
                  <span className="likes-counter">{likes}</span>
                </button>
              </div>
              <Comment clickedWork={clickedWork} />
            </>
          ) : (
            <>
            <div className="flex gap-3 ">
            <button onClick={verify} className="btn btn-success btn-lg ml-96">verify</button>
            <button onClick={reject} className="btn btn-error btn-lg ">reject</button>
              
            </div>
            </>
          ) }
        </div>
      </div>
      <div></div>
    </dialog>
  );
};

export default UserWorkDisplay;
