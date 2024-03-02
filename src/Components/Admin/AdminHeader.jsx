import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast,{Toaster} from 'react-hot-toast'
import { baseURL } from '../Api/Url'
const AdminHeader = () => {

    const navigate = useNavigate()

    const handleLogout = async() =>{

        const response =  await axios.post(`${baseURL}account/logout/`)
        localStorage.removeItem('admintoken');
        
        navigate('/admin')
        
    
      }

  return (
<div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          
          <a className="btn btn-ghost normal-case text-3xl  text-cyan-700">fe.Work-Admin</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <img src="data:image/jpeg;base64,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" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <a className="justify-between">
                  Profile
                  
                </a>
              </li>
              <li>
                <a>Edit Profile</a>
              </li> */}
              {/* <li>
                <a>Settings</a>
              </li> */}
              <li>
                <a onClick={ handleLogout }>Logout</a>
              </li>
            </ul>
          </div>
          <Toaster/>
        </div>
      </div>
    </div>
  )
}

export default AdminHeader