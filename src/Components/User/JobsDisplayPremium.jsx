import React, { useState, useEffect } from "react";
import JobDisplay from "./JobDisplay";
import HomePageHeader from "./HomePageHeader";
import axios from "axios";
import { baseURL } from "../Api/Url";
import { useSelector } from "react-redux";



const JobsDisplayPremium = () => {
  const [Jobs, setJobs] = useState([]);
  console.log(Jobs);

  useEffect(() => {
    const jobfun = async () => {
      const res = await axios.get(`${baseURL}account/posted_jobs/`);
      console.log(res.data);
      setJobs(res.data);
    };

    jobfun();
  }, []);

  const [userprofile, setUserprofile] = useState([]);

  const { userInfo } = useSelector((state) => state.user);
  const user = userInfo
  console.log(user,"mahi testing");

  console.log(userprofile)

  

  return (
    <>
      <HomePageHeader />
      <div className="grid grid-cols-4 gap-7 container mx-auto mt-5">
        {Jobs.map((job, index) => (
          <div key={index}>
            <JobDisplay job={job} />
          </div>
        ))}

      
      </div>
    </>
  );
};

export default JobsDisplayPremium;
