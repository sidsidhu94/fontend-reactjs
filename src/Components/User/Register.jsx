import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../Api/Url";


const Register = () => {
  const [otp, setotp] = useState(false);

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("")
  console.log(email);

  const [verifyotp, setVerifyotp] = useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, firstname, lastname, phonenumber, password);
    if(password != confirmpassword){
        return toast.error("Password dosnt match")
    }


    try {
      const response = await axios.post(
        `${baseURL}account/register/`,
        { firstname, lastname, email, phonenumber, password }
      );
      console.log(response, ">>>>>>>>>>>>>>>>>>>>>>>");
      if (response.status === 201) {
        setotp(true);

        toast.success("user registered");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyotp = async(e) => {
    e.preventDefault();
    console.log(verifyotp)

    try {
        const response = await axios.post(
            `${baseURL}account/verify_otp/`,
            { verifyotp,email }
          );
          if (response.status === 201) {
            
            navigate('/signin')
            toast.success("user registered");
          }
        
    } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <div className="flex justify-center mx-auto mt-20">
        <h1
          onClick={() => navigate("/")}
          className="btn btn-ghost normal-case text-3xl  text-cyan-700"
        >
          fe.Work
        </h1>
      </div>
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12  mt-6 ml">
        {otp ? (
          <div className="w-full text-center flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-semibold tracking-wider text-cyan-700 capitalize dark:text-white">
                Verify Otp.
              </h1>
            </div>
            <form className="w-full">
              <input
                type="text"
                placeholder="Type here"
                value={verifyotp}
                onChange={(e) => setVerifyotp(e.target.value)}
                className="input input-bordered input-info w-full max-w-xs"
              />
              <div className="w-full flex justify-center mt-9">
                <button
                  onClick={handleVerifyotp}
                  className="flex items-center justify-between  px-12 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-700 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-50   "
                >
                  <span>Verify otp </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <>
            <div className="w-full">
                <Toaster />
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Get your free account now.
              </h1>

              

              <div className="mt-6"></div>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phonenumber}
                    onChange={(e) => setphonenumber(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmpassword}
                    onChange={(e) => setconfirmpassword(e.target.value)}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-cyan-700 dark:focus:border-cyan-700 focus:ring-cyan-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="col-span-2 flex justify-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex items-center justify-between  px-12 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-700 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-50   "
                  >
                    <span>Sign Up </span>
                  </button>
                </div>
              </form>
              <p className="mt-8 text-xs font-light text-center text-gray-400">
                {" "}
                Already have an account?{" "}
                <a className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                onClick={() => navigate('/signin')}>
                  Sign In
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Register;
