/* eslint-disable no-unused-vars */
// import React from 'react'

// const Providers = () => {
//   return (
//     <div>
//       Provider
//     </div>
//   )
// }

// export default Providers



import React from 'react';

const Providers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-left">PROVIDERS</h1>
      <hr className="mb-8 border-t-2 border-[#3F0B71]" />
      <div className=" items-center text-center justify-center md:mt-10 p-6 flex flex-wrap gap-[30vh]">
        <button className="bg-[#FF0000] hover:bg-[#D60000]  py-4 px-8 rounded-lg transition duration-300 ease-in-out w-52 h-52">
       
          <img src="../../../public/images/Jio.svg" alt="Jio" className="w-full h-full object-contain" />
        </button>
        <button className="bg-[#E30613] hover:bg-[#D60000]  py-8 px-8 rounded-lg transition duration-300 ease-in-out w-52 h- 52">
          <img src="../../../public/images/Airtel.svg" alt="Airtel" className="w-full h-full object-contain" />
        </button>
      </div>
    </div>
  );
};

export default Providers;

