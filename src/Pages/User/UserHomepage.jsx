import React from 'react'
import HomePageHeader from '../../Components/User/HomePageHeader'
import HomePageTab from '../../Components/User/HomePageTab'
import DiscoverPage from '../../Components/User/DiscoverPage'
import Discover from '../../Components/User/Chat/Discover'
// import SideNavbar from '../../Components/User/SideNavbar'

const UserHomepage = () => {
  return (
    <>
        <HomePageHeader />
        
        <Discover/>
        <HomePageTab/>
        <DiscoverPage />
        {/* <SideNavbar /> */}
    </>
        
        
    
  )
}

export default UserHomepage