import React,{useEffect,useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { logout } from "../../Redux/userslice";
import { useLogoutMutation } from "../../Redux/userapislice";
import { IoMdChatbubbles } from "react-icons/io";
import axios from "axios";
import { baseURL } from "../Api/Url";
import Swal from 'sweetalert2';
import { RxAvatar } from "react-icons/rx";


const HomePageHeader = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logoutapi] = useLogoutMutation()
  
  const handleLogout = async() =>{

    

    const response = await logoutapi().unwrap()
    dispatch(logout())
    
    navigate('/')
    

  }

  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo?.user_id;
  console.log(userId);

  const [userprofile, setUserprofile] = useState([]);
  
  const premium = userprofile.premium_member

  
  console.log(premium)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${baseURL}account/user_profile_display/${userId}`
        );
        console.log(response, "User Profile");
        setUserprofile(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  const navigateToJobPremium = () => {
    if (premium) {
      navigate('/app/jobpremium');
    } else {
      Swal.fire('You have to be a premium member to access this feature!');
      
    }
  };

 

 
  console.log(premium)

  return (
    <div>
      <div className="navbar bg-base-100  ">
        <div className="flex-1 gap-10">
          
          <a onClick={() => navigate('/app/home')} className="btn btn-ghost normal-case text-3xl  text-cyan-700">fe.Work</a>
          <h1 onClick={()=> navigate('/app/home')} className=" text-cyan-700 text-xl " >Discover</h1>
          <h1 onClick={()=> navigate('/app/userprofiles')} className=" text-cyan-700 text-xl " >Hire</h1>
          <h1 onClick={navigateToJobPremium} className=" text-cyan-700 text-xl ">Jobs</h1>
        </div>
       
        <div className="flex-none gap-10">
          <div className="form-control">
            {/* <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            /> */}
          </div>
          {/* <div className="text-cyan-700 text-lg flex font-semibold   items-center  ">
            REQUESTS
          </div> */}
          <div className="text-cyan-700 text-lg flex   items-center gap-1 mr-3" onClick={() =>navigate('/app/inbox')}>
            
            
            <IoMdChatbubbles/><p className="font-semibold" >INBOX</p>
          </div>
          
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                {userprofile.profile_pic?(<img src={userprofile.profile_pic}  />):(  <RxAvatar  size={40}/>)}
                
              
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                 onClick={() => navigate('/app/profile')}
                 className="justify-between">
                  Profile
                  
                </a>
              </li>
              <li>
                <a onClick={()=>navigate('/app/editprofile')}>Edit Profile</a>
              </li>
              {/* <li>
                <a>Settings</a>
              </li> */}
              <li>
                <a onClick = { handleLogout } >Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-60 mt-6 text-center flex justify-center relative ">
      <img className="absolute w-full h-full" src="https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/63/71577e1cf59d802.jpg" alt="" />
      <div className="absolute m-auto top-0 bottom-0 w-fit  flex-col h-full   ">
      <h1 className="text-7xl text-white font-bold m-auto mt-8 ">Best of fe.Work</h1>
        <h1 className="text-2xl text-white mt-4 m-auto">Projects featured today by our curators</h1>

      </div>
       

      </div> */}
    </div>
  );
};

export default HomePageHeader;
