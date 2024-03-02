import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { baseURL } from "../Api/Url";

const EditProfile = () => {

  const [profile_image, setProfile_image] = useState();

  const [preview, setPreview] = useState(null)

  const [username, setUsername] = useState("")
  const [country, setCountry] = useState('')
  const [description, setDescription] = useState("")
  const [skills, setSkills] = useState("")

  const { userInfo } = useSelector((state)=>state.user)
  const userId = userInfo?.user_id
  console.log(userId,"................")

  console.log(username) 
  console.log(country)
  console.log(description)

  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const res = await axios.post(`${baseURL}account/user_profile/`,{userId,profile_image,username,country,description,skills})
    } catch (error) {
      console.log(error.message)
    }
  }
 

    const handleChange = (e) => {
      
      const file = e.target.files[0]
      if (file){
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
          setProfile_image(reader.result)
          setPreview(reader.result)
    }
    setProfile_image(file)
      }
    }

  // function handleChange(e) {
  //   console.log(e.target.files)
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }


  return (
    <div className="mt-14 ">
      <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 border border-stone-200 ">
        <h2 className="text-lg font-semibold t text-zinc-500 capitalize dark:text-white">
          Edit Profile
        </h2>
        <form >
          <div className=" flex justify-center">
            <div className="  boverflow-hidden rounded-full  ">
              
              
              <img className="w-28 h-28 rounded-full border border-cyan-500"  />
              {/* <img className="w-28 h-28 rounded-full border border-cyan-500" src={file} /> */}
            </div>
            
          </div>
          <div >
            <input className="md:ml-64 mt-3 " type="file" onChange = { handleChange }  />
            
          </div>
          
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              {/* <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="username"
              >
                Username
              </label> */}
              <label className="label">
                    <span className="label-text">Username</span>
                    {/* <span className="label-text-alt">0 - 50 words</span> */}
                  </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value) }
                
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
            <label className="label">
                    <span className="label-text">Your Country</span>
                    {/* <span className="label-text-alt">0 - 50 words</span> */}
                  </label>
              <input
                id="country"
                type="text"
                value={ country }
                onChange={(e)=> setCountry(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              {/* <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="description"
              >
                description
              </label>
              <input
                id="description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              /> */}
              <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Write your Description?</span>
                    {/* <span className="label-text-alt">0 - 50 words</span> */}
                      <span className="label-text-alt">
                        {0 + description.length} - 50 words
                      </span>
                  </label>
                  
                  <input
                id="description"
                type="text"
                value={ description }
                onChange={(e)=>setDescription(e.target.value)}
                maxLength={50} 
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
                 
                </div>
            </div>
            <div>
            <label className="label">
                    <span className="label-text">Your skills?</span>
                    {/* <span className="label-text-alt">0 - 50 words</span> */}
                  </label>
              
              <input
                id="skills"
                type="text"
                value={ skills}
                onChange={(e) => setSkills(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button onClick={ handleSubmit } className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-cyan-700 rounded-md hover:bg-cyan-500 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditProfile;
