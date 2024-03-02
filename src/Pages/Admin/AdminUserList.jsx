import React from 'react'
import AdminUser from '../../Components/Admin/AdminUser'
import AdminHeader from '../../Components/Admin/AdminHeader'
import SideNavbar from '../../Components/Admin/SideNavbar'

const AdminUserList = () => {
  return (
    // <div>
    //     <AdminHeader />
    //     <AdminUser />
    // </div>
     <div>
     <AdminHeader />
     <div className="flex">
       <SideNavbar />

       <div className="w-full">
       <AdminUser />
       </div>
     </div>
   </div>
  )
}

export default AdminUserList