import {React,useState,useEffect} from 'react'
import {Avatar} from "@nextui-org/react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../Api/Url';
const UserProfiles = () => {
    const navigate = useNavigate()

    const [userProfiles, setUserprofiles] = useState([])

    function handlesubmit(id) {
        console.log(id,"just testing..........")
        navigate(`/app/userselected/${id}`)
    }
   

    useEffect (()=>{
        const userProfiles = async()=>{
          const response = await axios.get(`${baseURL}account/userprofiles/`)
          console.log(response,">>>>>>>>>>>>.")
          setUserprofiles(response.data)
        
          
        }
        
        userProfiles()

      },[])
      console.log(userProfiles,"sdcsadkvhgiuyvg")

  return (

    <div className='w-full gap-10  p-16 h-screen grid grid-cols-4'>
        {userProfiles.map((e)=>(
            <div className='border flex-wrap   w-72  h-72'>
            <div className=' w-full h-[35%] border-b-2 flex relative justify-center'>
                <div className=' w-full flex'>
                    <div className='w-1/3  h-full' >

                    </div>
                    <div className='w-1/3  h-full' >
                        
                    </div>
                    <div className='w-1/3   h-full'>
                        
                    </div>

                </div>
                <Avatar className='w-20 h-20 bottom-[-3rem] left-0 right-0 m-auto absolute' isBordered color="danger" src={e.profile_pic} />
            </div>
            <div className="w-full ">
                <h1 className='font-extrabold text-center mt-12 'style={{ textTransform: 'uppercase' }} >{e.username}</h1>
                <h1 className='text-center mt-1' style={{ textTransform: 'uppercase' }} >{e.country}</h1>
                <button onClick={()=>handlesubmit(e.user_id)} className="btn btn-block mt-3 bg-cyan-700 btn-circle text-white">View Profile</button>


            </div>

        </div>

        ))}
        
        

    </div>
  )
}

export default UserProfiles