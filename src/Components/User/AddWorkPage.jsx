import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RxText } from "react-icons/rx";
import axios from "axios";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { baseURL } from "../Api/Url";
const AddWorkPage = () => {
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  
  const navigate=useNavigate()

  const [selectedimages, setSelectedimages] = useState([]);
  const [captionEntered, setcaptionEntered] = useState("");

  const [textWritten, settextWritten] = useState("");
  console.log(captionEntered);

  const imageRef = useRef();
  const secImageRef = useRef();

  const handleImages = () => {
    imageRef.current.click();
  };

  const secHandleImages = () => {
    secImageRef.current.click();
  };
// #######################################
  // const handleChangeImage = (e) => {
  //   const fileArray = Array.from(e.target.files).map((file) =>
  //     setSelectedimages((prevSelectedImages) => [...prevSelectedImages, file])
  //   );
  // };

  // #######################################

  const handleChangeImage = async (e) => {
    const fileArray = Array.from(e.target.files);

    // Convert each selected image to base64 and store them in state
    const base64Images = [];
    for (const file of fileArray) {
      try {
        const base64Data = await convertToBase64(file);
        base64Images.push(base64Data);
      } catch (error) {
        console.error("Error converting to base64:", error);
      }
    }

    // Update the state with the selected images and their base64 data
    setSelectedimages(base64Images);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };



  console.log(textWritten);

  const handleText = () => {
    settextInput(true);
  };
  const handleCaption = () => {
    settextCaption(true);
  };

  const [textInput, settextInput] = useState(false);

  const [textCaption, settextCaption] = useState(false);

  console.log(selectedimages, "selected images");

  // const formData = new FormData();
  // formData.append('selectedimages', selectedimages);



  const handleSubmit = async (e) => {
    e.preventDefault();

    

    // selectedimages.forEach((image, index) => {
    //   formData.append(`selectedimages_${index}`, image);
    // });




    try {
      console.log(userId)
      console.log(userId,selectedimages,captionEntered,textWritten,"here just check me ")
      const res = await axios.post(`${baseURL}account/user_work_post/`, {userId,selectedimages,captionEntered,textWritten});
      console.log('Images sent to the backend:', res.data)
      console.log('Data sent successfully:', res);
      if (res.status == 201){
        navigate('/app/profile')
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  // console.log(formData, "dont worry i am here.................");

  return (
    <>
      <div className="flex  mt-16">
        {/* <div className="  w-[50%] min-h-[24rem] border-dashed border-2 mt-44 ml-52 flex flex-col justify-center items-center gap-4 py-5"> */}

        <div className="  w-5/6 min-h-[40rem] border-dashed border-2 ml-5  flex flex-col justify-center items-center gap-4 py-5">
          {textInput && (
            <textarea
              className="border border-cyan-700  rounded-sm border-dotted"
              name=""
              id=""
              cols="60"
              rows="4"
              placeholder="Enter the Project Description"

              value={textWritten}
              onChange={(e) => settextWritten(e.target.value)}
            ></textarea>
          )}

          {selectedimages.length === 0 ? (
            <>
              START BUILDING YOUR PROJECT
              <div className="text-4xl text-cyan-700">
                {/* onChange={(e) =>handleImages(e)}   */}
                <input
                  type="file"
                  multiple
                  hidden
                  ref={imageRef}
                  onChange={(e) => handleChangeImage(e)}
                />
                <MdAddPhotoAlternate onClick={handleImages} />
              </div>
              <p>Add Image</p>
            </>
          ) : (
            <>
              {selectedimages.map((item,index) => (
                <div className="max-w-full h-auto rounded-xl border shadowmd overflow-hidden " key={index}>
                  <img
                    className="w-full  h-full"
                    src={item}
                    alt=""
                  />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="ml-5">
          <div className="  mr-5 w-64 h-32 border border-stone-200 rounded-md ">
            <div className="bg-stone-300 border rounded-t-md h-8 ">
              <p className="text-stone-100 text-center">ADD CONTENT</p>
            </div>
            <div className="flex justify-evenly w-full">
              <div>
                <div className="text-5xl text-cyan-700">
                  <label htmlFor="file"></label>
                  <input
                    type="file"
                    multiple
                    hidden
                    ref={secImageRef}
                    onChange={(e) => handleChangeImage(e)}
                  />
                  <MdAddPhotoAlternate onClick={secHandleImages} />
                </div>
                <p className="text-center text-sm">IMAGE</p>
              </div>
              <div>
                <div>
                  <div className=" text-5xl text-cyan-700">
                    <RxText onClick={handleText} />
                  </div>
                  <p className="text-center text-sm">TEXT</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10  w-64 h-32 border border-stone-200 rounded-md">
            <div>
              <div className="bg-stone-300 border rounded-t-md h-8 ">
                <p className="text-stone-100 text-center">ADD CAPTION</p>
              </div>
              <div>
                {!textCaption ? (
                  <>
                    <div className=" text-5xl flex justify-center text-cyan-700">
                      <RxText onClick={handleCaption} />
                    </div>
                    <p className="text-center text-sm">ADD CAPTION</p>
                  </>
                ) : (
                  <>
                    <textarea
                      name=""
                      id=""
                      cols="25"
                      rows="2"
                      className="ml-3"
                      placeholder="Enter the Caption"
                      value={captionEntered}
                      onChange={(e) => setcaptionEntered(e.target.value)}
                    ></textarea>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="   rounded-xl">
            <button
              onClick={handleSubmit}
              className="btn btn-wide mt-3 bg-cyan-700 btn-circle text-cyan-500"
            >
              SAVE WORK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWorkPage;
