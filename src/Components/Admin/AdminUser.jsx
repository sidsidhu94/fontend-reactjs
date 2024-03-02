import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import { baseURL } from "../Api/Url";

const AdminUser = () => {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(null);

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const users = async () => {
      const response = await axios.get(
        `${baseURL}account/dashboard/`
      );
      console.log(response, ">>>>>>>>>>>>.");
      setUsers(response.data);
    };
    users();
  }, []);

  const handleRemove = async (id) => {
    console.log(id);
    const response = await axios.delete(
      `${baseURL}account/remove/${id}`
    );
    console.log(response, "//////////");
  };

  // const handleEdit=(user)=>{
  //   setModal(true)
  //   setEdit(user)
  //   console.log("id",id)

  // }

  const confirmedEdit = async () => {
    const res = await axios.put(
      `${baseURL}account/edit/${edit.id}`,
      edit
    );
    console.log(res, "///////////////////");
  };

  return (
    <>
      {/* <>{modal && (
            <div className='absolute flex justify-center w-screen z-10 ' >
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-44" >
            <div className="px-6 py-4">
              <div className="flex justify-center mx-auto">
                
              </div>
              <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                
              </h3>
              <p className="mt-1 text-center text-gray-500 dark:text-gray-400 font-bold ">
                Edit
              </p>
              <form >
              <div className="w-full mt-4">
                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    placeholder="Username"
                    aria-label="Username"
                    value={edit?.username || ""}
                    onChange={(e)=>setEdit({...edit,username:e.target.value})}
      
                    
                  />
                </div>
                <div className="w-full mt-4">
                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    
                    value={edit?.email || ""}
                    onChange={(e)=>setEdit({...edit,email:e.target.value})}
                  />
                </div>
                
              
                <div className="flex items-center justify-between mt-4">
                  
                  <button onClick={confirmedEdit} className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ml-28 ">
                    Edit
                  </button>
                </div>
              </form>
            </div>
            
          </div>
          </div>
      ) }
      </> */}
      <div className="h-fit w-fit mx-auto border border-stone-300 rounded-2xl flex px-5">
          <div className="overflow-x-auto  ">
            <table className="table border-spacing-4 table-fixed   ">
              {/* head */}
              <thead>
                <tr >
                  <th>Sl No</th>
                  {/* <th>ID</th> */}
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Email </th>
                  
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    {/* <td>{user.id}</td> */}
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.phonenumber}</td>
                    <td >{user.email}</td>
                    

                    <td>
                      <button
                        className="btn bg-red-500 btn-xs"
                        onClick={() => handleRemove(user.id)}
                      >
                        block
                      </button>
                      {/* <button className="btn bg-blue-300 btn-xs ml-4" onClick={()=> handleEdit(user)} >Edit</button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
    </>
  );
};

export default AdminUser;
