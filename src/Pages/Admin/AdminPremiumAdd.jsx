import React from 'react'
import Premium from '../../Components/Admin/Premium'
import AdminHeader from '../../Components/Admin/AdminHeader'
import SideNavbar from '../../Components/Admin/SideNavbar'

const AdminPremiumAdd = () => {
  return (
    <div>
    <AdminHeader />
    <div className="flex">
      <SideNavbar />

      <div className="w-full">
        <Premium />
      </div>
    </div>
  </div>
  )
}

export default AdminPremiumAdd