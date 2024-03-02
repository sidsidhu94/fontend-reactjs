import axios from 'axios'
import React, { useState,useEffect } from 'react'

import { useParams } from 'react-router-dom'
import SelectedUser from '../../Components/User/SelectedUser'
import HomePageHeader from '../../Components/User/HomePageHeader'
import SelectedUserWork from '../../Components/User/SelectedUserWork'
import { baseURL } from '../../Components/Api/Url'
import JobDisplay from '../../Components/User/JobDisplay'

const UserselectedProfile = () => {

  const [activeTab, setactiveTab] = useState("Work");


    const [userProfile, setuserProfile] = useState([])
    const [userwork, setUserwork] = useState([]);
    const {id} = useParams()

    const handleTabClick = (tab) => {
      setactiveTab(tab);
    };
    const [Jobs, setJobs] = useState([]);
    console.log(Jobs);
  
    useEffect(() => {
      const jobfun = async () => {
        const res = await axios.get(`${baseURL}account/post_job/${id}/`);
        console.log(res.data);
        setJobs(res.data);
      };
  
      jobfun();
    }, []);

    useEffect (()=>{
        const useProfile = async()=>{

            const response = await axios.get(`${baseURL}account/user_profile_display/${id}`)
            console.log(response,"check")
            setuserProfile(response.data)

        }
        const userwork = async () => {
            const response = await axios.get(
              `${baseURL}account/user-work/${id}`
            );
            console.log(response.data, ">>>>>>>>>>>>this.");
            setUserwork(response.data);
          };
          userwork()
        useProfile()

    },[id])
   
  return (
    <div>
      <HomePageHeader />
      <div className="flex w-screen">
        <div>
        <SelectedUser profile = {userProfile} />
        </div>
        <div className="flex-wrap  gap-10 mt-6 ml-20 ">
        <div className="tabs font-bold gap-7">
            <button
              className={`p-2 rounded-3xl w-36 ${
                activeTab === "Work" ? "bg-cyan-700 text-white" : "border-1 border-neutral-400 border-dashed"
              }`}
              onClick={() => handleTabClick("Work")}
            >
              Work
            </button>
            
            <button
              className={`p-2 rounded-3xl w-36 ${
                activeTab === "View Job" ? "bg-cyan-700 text-white" : "border-1 border-neutral-400 border-dashed"
              }`}
              onClick={() => handleTabClick("View Job")}
            >
              View Job
            </button>
          </div>
          <div className="mt-10">
            {activeTab === "Work" && <SelectedUserWork  works = {userwork} />}
            
            {activeTab === "View Job" && 
            <div className="grid grid-cols-4 gap-11 container mx-auto mt-5">
            {Jobs.map((job, index) => (
              <div key={index}>
                <JobDisplay job={job} />
              </div>
            ))}
          </div>}
            {/* Add other conditions for other tabs */}
          </div>

          
        </div>
      </div>
    </div>
    // <div>
        
       
        /* <SelectedUser profile = {userProfile} />
        <SelectedUserWork works = {userwork} />
        
    </div> */
  )
}

export default UserselectedProfile