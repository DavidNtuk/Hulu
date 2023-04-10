import React from 'react'

const Showcase = () => {
  return (
    <div className='relative w-full h-[750px]'>
      <div className='absolute w-full h-[100px] bg-gradient-to-b from-black'></div>
      <div className='w-full h-full'>
        <img className='w-full h-full object-cover' src='https://cnbl-cdn.bamgrid.com/assets/62ed936344e6ffbac48c896b2bd327fe171521dd941b6ddc8402e2eae50116fc/original' alt='backgroundImage'/>
        <div className='absolute top-[15%] w-full  text-center flex flex-col justify-center p-5'>
          <h3 className='text-green-500 font-bold uppercase'>Disney Bundle Duo Basic</h3>
          <div className='flex justify-center py-4'> 
            <img className='w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]' src='https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original' alt='DisneyLogo'/>
          </div>
          <h2 className='text-white text-lg md:text-2xl text-center font-bold'>Get Hulu & Disney+, both with ads, for $9.99/month.</h2>
          <div className='flex flex-col items-center'>
            <button className='bg-green-400  w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] uppercase p-4 rounded font-bold my-4 hover:opacity-60'>Get Them Both</button>
            <a className='text-white border-b-2'> Terms apply</a>
            <a className='text-white my-8 cursor-pointer border-b-2'>Sign up for Hulu only</a>
          </div>
        </div>

        {/* Transparent Background */}

        <div className='absolute bottom-0 w-full bg-black text-center md:text-left p-5 lg:p-10 bg-opacity-[50%] md:flex md:justify-between md:items-center '>
          <div className='flex justify-center md:justify-start'> 
            <img className='w-[50%] lg:w-[400px] md:w-[300px] md:items-start md:px-2 ' src='https://cnbl-cdn.bamgrid.com/assets/1afce5041391d18ddcca64656450cce9664bc80d0618344d06ff6dcf005775e8/original' alt='DisneyLogo'/>
          </div>
          <div className='max-w- lg:max-w-[50%] md:max-w-[30%]'>
            <h3 className='text-green-500 font-bold uppercase'>Disney Bundle Duo Basic</h3>
            <h2 className='text-white text-md py-2 text-center md:text-2xl md:text-left'>Get Hulu, Disney+, and ESPN+, all with ads, for $12.99/month.</h2>
          </div>
          <div className='flex flex-col items-center'>
            <button className='bg-transparent hover:bg-gray-200 last: hover:text-black uppercase px-6 py-4 rounded font-bold border-2 text-white'>Get All Three</button>
            <a className='text-white border-b-2 text-sm pt-2'> Terms apply</a>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default Showcase