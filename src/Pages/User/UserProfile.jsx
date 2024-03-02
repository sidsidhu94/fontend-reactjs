import React, { useState, useEffect } from "react";
import Profile from "../../Components/User/Profile";
import HomePageHeader from "../../Components/User/HomePageHeader";
import AddWork from "../../Components/User/AddWork";
import UserWorkCard from "../../Components/User/UserWorkCard";
import JobDisplay from "../../Components/User/JobDisplay";
import { useNavigate } from "react-router-dom";
import PostJob from "../../Components/User/PostJob";
import { useSelector } from "react-redux";
import { baseURL } from "../../Components/Api/Url";
import axios from "axios";

const UserProfile = () => {
  const [activeTab, setactiveTab] = useState("Work");

  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId);

  const [Jobs, setJobs] = useState([]);
  console.log(Jobs);

  useEffect(() => {
    const jobfun = async () => {
      const res = await axios.get(`${baseURL}account/post_job/${userId}/`);
      console.log(res.data);
      setJobs(res.data);
    };

    jobfun();
  }, []);

  const handleTabClick = (tab) => {
    setactiveTab(tab);
  };

  return (
    <div>
      <HomePageHeader />
      <div className="flex w-screen">
        <div>
          <Profile />
        </div>

        <div className="flex-wrap gap-10 mt-6 ml-20">
          <div className="tabs font-bold gap-7">
            <button
              className={`p-2 rounded-3xl w-36 ${
                activeTab === "Work"
                  ? "bg-cyan-700 text-white"
                  : "border-1 border-neutral-400 border-dashed"
              }`}
              onClick={() => handleTabClick("Work")}
            >
              Work
            </button>
            <button
              className={`p-2 rounded-3xl w-36 ${
                activeTab === "Post Job"
                  ? "bg-cyan-700 text-white"
                  : "border-1 border-neutral-400 border-dashed"
              }`}
              onClick={() => handleTabClick("Post Job")}
            >
              Post Job
            </button>
            <button
              className={`p-2 rounded-3xl w-36 ${
                activeTab === "View Job"
                  ? "bg-cyan-700 text-white"
                  : "border-1 border-neutral-400 border-dashed"
              }`}
              onClick={() => handleTabClick("View Job")}
            >
              View Job
            </button>
          </div>

          <div className="mt-10">
            {activeTab === "Work" && (
              <UserWorkCard title="Add your work here" role={"user"} />
            )}
            {activeTab === "Post Job" && <PostJob title="Add your job here" />}
            {activeTab === "View Job" && (
              <div className="grid grid-cols-4 xl:grid-cols-4 sm:grid-cols-1 gap-11 container mx-auto mt-5  w-full">
                {Jobs.map((job, index) => (
                  <div key={index}> 
                    <JobDisplay job={job} />
                  </div>
                ))}
              </div>
            )}
            {/* Add other conditions for other tabs */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
