import React from 'react'
import {Link} from 'react-router-dom'
import {BiSolidHome, BiMessageDetail} from 'react-icons/bi'
import {GrSettingsOption} from 'react-icons/gr'
import {CgProfile} from 'react-icons/cg'


const Navbar = () => {
  return (
    <div>
            <div className="flex flex-col h-screen p-5 bg-white shadow w-60 ">
                <div className="space-y-3">
                    {/* <div className="flex items-center">
                        <h2 className="text-2xl font-bold">Dashboard</h2>
                    </div>         */}
                    <div className="flex-1">
                        <div className="pt-2 pb-4 space-y-1 text-sm">
                             <div className="flex items-center p-2 space-x-3 rounded-md text-xl">
                                <BiSolidHome />
                                <Link to="/Home">Home</Link>
                             </div>
                             <div className="flex items-center p-2 space-x-3 rounded-md text-xl">
                                <CgProfile />
                                <Link to='/Profile'>Profile</Link>
                             </div>
                             <div className="flex items-center p-2 space-x-3 rounded-md text-xl">
                                <BiMessageDetail />
                                <Link to='/Message'>Message</Link>
                             </div>
                             <div className="flex items-center p-2 space-x-3 rounded-md text-xl">
                                <GrSettingsOption />
                                <Link to='/Settings'>Settings</Link>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar