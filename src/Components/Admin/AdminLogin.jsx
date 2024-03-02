
import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast'
import { baseURL } from "../Api/Url";

const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    
    // useEffect(() => {
    //   const token = localStorage.getItem('token')
    //   if (token){
    //         navigate('/dashboard')
    //   }
    // }, [])

    const navigate=useNavigate()

    

    const handleSubmit = async(e) => {
      
        e.preventDefault();

        // const postData = {
        //   'email': email,
        //   'password': password,
          
        // };

        try {
          const response = await axios.post(`${baseURL}account/admin_login/`,{email,password})
        const token =response.data.token
        localStorage.setItem('admintoken',token)
        console.log(response,">>>>>>>>>>>>>>")


       if(response.data.message === 'adminlogin' ) 
       {
        toast.success("admin logged in")
        navigate('/dashboard')
      
       }else if(response.data.message === "Incorrect Password")
       {
        toast.error('Incorrect')
       }else
       {
        toast.error('"not Authorized"')
       }
        } catch (error) {
          toast.error(error.message)
        }
       
        



    }


  return (
    <div>
    <Toaster/>
    <>
    
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-44 ">
        <div className="flex justify-center mx-auto"></div>
        <h3 className="text-center font-bold text-cyan-700 text-2xl " >fe.Work</h3>
        <h3 className="text-center font-bold text-cyan-700">Admin Login</h3>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Username
            </label>
            <input
              type="text" value={email} onChange={(e)=>setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Password
              </label>
            </div>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
              <link rel="stylesheet" href="" />
            <button  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-800 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  </div>
  )
}

export default AdminLogin