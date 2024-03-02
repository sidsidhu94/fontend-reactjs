import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate,Navigate} from 'react-router-dom'
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast'

import { useSelector,useDispatch } from 'react-redux';
import { setLoginDetails } from '../../Redux/userslice';
import { useLoginMutation } from '../../Redux/userapislice'; 

const SignIn = () => {

  const navigate=useNavigate()

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  useEffect(()=> {
    console.log(password)
  },[password])

  
  const dispatch = useDispatch()
  const [login] = useLoginMutation()
  
  const handleSubmit = async(e)  => {
      console.log(password)
    e.preventDefault();

    try {
      const res = await login({email,password}).unwrap()
      console.log(res,">>>>>>>>>>>")
      dispatch(setLoginDetails({...res}))
      if(res.message === 'userlogin')
      {
        navigate('/app/home')
        toast.success('logged in succesfully')
      }
      // if(res.message === 'Not a registered user'){
      //   toast.success('Not a registered user')
      // }
      
    } catch (error) {
      console.log(error.message)
    }

    

}
// const token = localStorage.getItem('userInfo')
//   if (token){
//     navigate('app/home')
//     // return <Navigate to="app/home" />
//   }

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mt-32">
      <Toaster/>
      <div className="flex justify-center mx-auto">
        
        <h1 onClick={() => navigate('/')} className="btn btn-ghost normal-case text-3xl  text-cyan-700">fe.Work</h1>
      </div>
      <div>
      
      </div>
      <form onClick={ handleSubmit } className="mt-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Username
          </label>
          <input
            type="text"
            value={ email }
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-cyan-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              type="password"
              
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-600 dark:text-gray-400 hover:underline"
            >
              Forget Password?
            </a>
          </div>
          <input
            type="password"
            value={ password }
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-950 rounded-lg hover:bg-cyan-800 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5" />
        <a
          href="#"
          className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
        >
          or login with Google
        </a>
        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5" />
      </div>
      <div className="flex items-center mt-6 -mx-2">
        <button
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-cyan-700 rounded-lg hover:bg-cyan-700 focus:bg-cyan-700 focus:outline-none"
        >
          <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
          </svg>
          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
        
      </div>
      <p className="mt-8 text-xs font-light text-center text-gray-400">
        {" "}
        Don't have an account?{" "}
        <a
           onClick={() => navigate('/register')}
          className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >
          Create One
        </a>
      </p>
    </div>
  );
};

export default SignIn;
