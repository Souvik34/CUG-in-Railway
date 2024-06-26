import React from 'react'
import "./Hero.css"
import { useAuth } from '../../store/Auth';
import { Link } from 'react-router-dom';


const Hero = () => {
  const { isLoggedIn } = useAuth();
  const {user,isLoading}= useAuth();
 console.log("Admin user Data",user)

  return (
<nav className="w-full flex items-center bg-admin-gradient fixed pt-36  justify-between py-3 px-10">
      <div className="flex-grow">
        <h1 className="text-4xl font-semibold text-white text-center">
          ADMIN PORTAL
        </h1>
      </div>
      <div className="text-base font-medium space-x-5">
        {isLoggedIn ? (
          <Link
            to="/logout"
            className="py-2 px-4 border rounded text-white bg-[#ef4444] hover:bg-[#991b1b]">
            Logout
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  )
}

export default Hero