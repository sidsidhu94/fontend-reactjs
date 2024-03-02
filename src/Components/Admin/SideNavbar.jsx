import React from 'react'
import { useNavigate } from 'react-router-dom'
const SideNavbar = () => {
    const navigate = useNavigate()
  return (
    
        <div className=" flex px-5 basis-[20%] h-[100vh] bg-cyan-700">
            <div className='px-3'>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]'>
                    <h1 onClick={() => navigate('/dashboard')} className='text-white text-[18px] font-bold leading-[20px]'>Dashboard</h1>

                </div>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]'>
                    <h1 onClick={() => navigate('/userlist')} className='text-white text-[18px] font-bold leading-[20px]'>Members</h1>

                </div>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]'>
                    <h1 onClick={() => navigate('/adminwork')}  className='text-white text-[18px] font-bold leading-[20px]'>Verify Post</h1>

                </div>
                <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#ededed]/[0.3]'>
                    <h1 onClick={()=>navigate('/premium')} className='text-white text-[18px] font-bold leading-[20px]'>Membership</h1>

                </div>

            </div>
      
            
      
    </div>
  )
}

export default SideNavbar