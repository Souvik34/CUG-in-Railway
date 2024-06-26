import React from 'react'
import "./HeroAdmin.css"



const Hero = () => {
  return (
<nav className="w-full  flex items-center justify-between">
<h1 className="text-4xl font-semibold py-5 text-white ml-32 px-96 flex-grow">
  ADMIN PORTAL
</h1>

 {/* logout button */}
 <div className="text-base font-medium space-x-5 lg:block">
  {isLoggedIn ? (
    <Link
      to="/logout"
      className="py-2 px-2 border rounded text-white bg-[#ef4444] hover:bg-[#991b1b] ml-3 mr-3">
      Logout
    </Link>
  ) : (
    ""
  )}
</div>

{/* <div className="w-20"></div> */}
{/* // This div is a placeholder to keep the spacing correct */}
</nav>
  )
}

export default Hero