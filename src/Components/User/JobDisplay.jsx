import React, { useState,useEffect } from 'react'
import {Card, CardHeader, CardBody, CardFooter,Divider, Avatar, Button} from "@nextui-org/react";


import { useNavigate } from "react-router-dom";


const JobDisplay = ({job}) => {

  console.log("hello")

  console.log(job,"dsmcnvhsdgcvhdsc")

  const navigate = useNavigate();


  const handleViewJobs = () =>{

    navigate("/app/viewjob",{state:{itemdata:job}})

  }

    

    return (

      <>
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={job.user_profile.profile_pic} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">{job.user_profile.username}</h4>
              {/* <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5> */}
            </div>
          </div>
          <Button
          className='bg-cyan-700'
            // className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
            color="primary"
            radius="full"
            size="sm"
            onClick={handleViewJobs}
          
          >
            View Job
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
          {job.jobcaption}
          </p>
          
          <span className="pt-2">
            {job.requirements}
            
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small"> EXPERIANCE
</p>
            <p className=" text-default-400 text-small"> {job.experiance}</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small"></p>
            <p className="text-default-400 text-small"></p>
          </div>
        </CardFooter>
      </Card>

          
      </>
      

    );
}

export default JobDisplay