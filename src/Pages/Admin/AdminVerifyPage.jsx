import React from 'react'
import AdminDisplayWork from '../../Components/Admin/AdminDisplayWork'
import AdminHeader from '../../Components/Admin/AdminHeader'
import SideNavbar from '../../Components/Admin/SideNavbar'

const AdminVerifyPage = () => {
  return (
    <div>

      <AdminHeader />
      <div className='flex '>
        <div className='w-96'>
        <SideNavbar />
        </div>
        

        <div className=' ml-16'>
          <AdminDisplayWork />
        </div>
      </div>
    </div>
  )
}

export default AdminVerifyPage