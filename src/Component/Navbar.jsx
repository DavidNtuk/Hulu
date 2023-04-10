import React from "react"


const Navbar = () =>{
    return(
        <div className="w-full flex items-center justify-between text-white absolute cursor-pointer p-3 px-10 z-10">
            <h1 className="font-bold text-3xl text-green-400">hulu</h1>
          <div>
            <button className="cursor-pointer font-bold uppercase text-gray-500 hover:text-white">Log in</button>
          </div>
        </div>
    )
}

export default Navbar