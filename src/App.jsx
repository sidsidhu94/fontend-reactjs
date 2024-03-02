// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import LandingPage from './Components/User/LandingPage'
// import Header from './Components/User/header'

import { NextUIProvider } from "@nextui-org/react";

import UserLandingPage from "./Pages/User/UserLandingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserSignIn from "./Pages/User/UserSignIn";
import UserRegister from "./Pages/User/UserRegister";
import UserHomepage from "./Pages/User/UserHomepage";
import UserProfile from "./Pages/User/UserProfile";
import AdminLoginPage from "./Pages/Admin/AdminLoginPage";

import UserEditProfile from "./Pages/User/UserEditProfile";

import AdminDashboardPage from "./Pages/Admin/AdminDashboardPage";

import AddWorks from "./Pages/User/AddWorks";
import UserWorkCard from "./Components/User/UserWorkCard";
import UserInbox from "./Components/User/UserInbox";
import UsersInbox from "./Components/User/UsersInbox";

import AdminVerifyPage from "./Pages/Admin/AdminVerifyPage";
import UserWorkDisplay from "./Components/User/UserWorkDisplay";

import HireUser from "./Pages/User/HireUser";
import UserselectedProfile from "./Pages/User/UserselectedProfile";
import Comment from "./Components/User/Comment";
import VideoCall from "./Components/User/VideoCall";
import UserVideoCall from "./Components/User/UserVideoCall";
import Premium from "./Components/Admin/Premium";
import AdminPremiumAdd from "./Pages/Admin/AdminPremiumAdd";
import Message from "./Pages/User/Message";
import PrivateRoute from "./Components/Routing/PrivateRoute";
import PostWork from "./Components/User/PostWork";
import JobPosting from "./Pages/User/JobPosting";
import JobDisplay from "./Components/User/JobDisplay";
import JobsDisplayPremium from "./Components/User/JobsDisplayPremium";
import PostWorkDisplay from "./Components/User/PostWorkDisplay";
import ViewJobs from "./Pages/User/ViewJobs";
import AdminUserList from "./Pages/Admin/AdminUserList";

// function App() {
// const [count, setCount] = useState(0)

function App() {
  const token = localStorage.getItem("admintoken");
  console.log(token, "**************");

  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLandingPage />} />

            <Route path="/signin" element={<UserSignIn />} />
            <Route path="/register" element={<UserRegister />} />

            <Route path="/app" element={<PrivateRoute />}>
              <Route path="home" element={<UserHomepage />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="addwork" element={<AddWorks />} />
              <Route path="display" element={<UserWorkCard />} />
              <Route path="editprofile" element={<UserEditProfile />} />

              <Route path="inbox" element={<Message />} />
              <Route path="inbox1/:id/:name" element={<Message />} />
              <Route path="modal" element={<UserWorkDisplay />} />
              <Route path="video" element={<VideoCall />} />
              <Route path="room/:roomId" element={<UserVideoCall />} />
              <Route path="userprofiles" element={<HireUser />} />

              <Route path="jobpremium" element={<JobsDisplayPremium />} />
              <Route path="viewjob" element={<ViewJobs />} />


              <Route
                path="userselected/:id"
                element={<UserselectedProfile />}
              />

              <Route path="like" element={<Comment />} />
              <Route path="postwork" element={<JobPosting />} />
              <Route path="displaywork" element={<JobDisplay />} />
            </Route>
            

            <Route
              exact
              path="/dashboard"
              element={
                token ? <AdminDashboardPage /> : <Navigate to={"/admin"} />
              }
            />
            <Route path="/userlist" element={<AdminUserList />} />
            {/* <Route  path="/adminuser" element={<AdminUserList />} /> */}
            <Route path="/admin" element={<AdminLoginPage />} />
            {/* <Route  path="/editprofile" element={<EditProfile />} /> */}

            <Route path="/adminWork" element={<AdminVerifyPage />} />

            {/* just testing routes */}

            <Route path="/premium" element={<AdminPremiumAdd />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
      {/* <Header/>
    <LandingPage/> */}
    </>
  );
}

export default App;
