import React,{useState} from "react";
import { Textarea,Input,Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import axios from "axios";
import { baseURL } from "../Api/Url";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PostWork = () => {

  const [jobCaption, setjobCption] = useState('')
  const [requirements, setRequirements] = useState('')
  const [experiance, setExperiance] = useState('')
  const [JobDescription, setJobDescription] = useState('')
  console.log(JobDescription)

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId);

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      const response = await axios.post(
        `${baseURL}account/post_job/${userId}/`,
        {jobCaption,requirements,experiance,JobDescription}
        
      );
      console.log(response.status)
      if (response.status === 201){
        toast.success("your job posted")
        navigate('/app/profile')
        
      }
    } catch (error) {
      
    }
  }
  

  return (
    <div className="  mx-auto mt-32 ">
      <div className="text-center mb-5 font-extrabold text-5xl text-cyan-700">
      Post your Job

      </div>
      
      <Input
      
      type="text"
      label="Job Caption"
      value={jobCaption}
      onChange={(e)=>setjobCption(e.target.value)}

      className="mx-auto max-w-2xl mb-3"
    />
    <Input
      
      type="text"
      label="Requirements"
      value={requirements}
      onChange={(e)=>setRequirements(e.target.value)}
      
      className="mx-auto max-w-2xl mb-3"
    />
    <Input
      
      type="text"
      label="Experiance"
      value={experiance}
      onChange={(e)=>setExperiance(e.target.value)}
      
      className="mx-auto max-w-2xl mb-3"
    />
     
      <Textarea
        label="Job Description"
        placeholder="Enter your job description"
        className=" mx-auto max-w-2xl"
        value={JobDescription}
        onChange={(e)=>setJobDescription(e.target.value)}
      />
      <div className="flex justify-center ">
      <Button onClick={handleSubmit} type="submit" radius="full" className="mt-3 w-72 bg-gradient-to-tr from-cyan-500 to-cyan-700 text-white shadow-lg">
      Post  Work
    </Button>

      </div>
      
    </div>
  );
};

export default PostWork;
