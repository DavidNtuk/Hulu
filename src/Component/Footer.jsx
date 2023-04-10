import React from 'react'

const Footer = () => {

    // const toggle = () => {
    //     var 
    // }

  return (
    <div className='bg-gray-200 w-full h-full'>
        <div className='lg:flex lg:justify-center  lg:border-gray-400 lg:border-b-2'>
            <div className='lg:py-6'>
                <div className='flex justify-between px-4 py-4 lg:px-10 cursor-pointer'>
                    <h3 className='uppercase text-sm font-bold text-gray-800 cursor-pointer  button'>Browse</h3>
                    <i className='fa fas-arrow-down'></i>
                </div>
                <div className='lg:flex' id='group'>
                    <ul  className='px-4 text-sm text-gray-600 py-3 lg:px-10 '>
                        <li className='py-1'>Streaming Library</li>
                        <li className='py-1'>Live TV</li>
                        <li className='py-1'>Live News</li>
                        <li className='py-1'>Live Sports</li>
                    </ul>
                    <ul  className='px-4 text-sm text-gray-600 py-3 lg:px-10 '>
                        <li className='py-1'>TV Shows</li>
                        <li className='py-1'>Movies</li>
                        <li className='py-1'>Originals</li>
                        <li className='py-1'>Network</li>
                        <li className='py-1'>Kids</li>
                        <li className='py-1'>FX</li>
                    </ul>
                    <ul  className='px-4 text-sm text-gray-600 py-3 lg:px-10 '>
                        <li className='py-1'>HBO Max</li>
                        <li className='py-1'>Cinemax</li>
                        <li className='py-1'>Showtime</li>
                        <li className='py-1'>STARZ</li>
                    </ul>
                    <ul  className='px-4 text-sm text-gray-600 py-3 lg:px-10 '>
                        <li className='py-1'>Disney Bundle Trio Basic</li>
                        <li className='py-1'>Disney Bundle Trio Premium</li>
                        <li className='py-1'>Disney Bundle Duo Basic</li>
                        <li className='py-1'>Student Discount</li>
                    </ul>
                </div>
            </div>

            <div className='lg:py-6'>
                <div className='flex justify-between px-4 py-4 lg:px-10'>
                    <h3 className='uppercase text-sm font-bold text-gray-800'>Help</h3>
                    <i className='fa fas-arrow-down'></i>
                </div>
                <ul  className='px-4 text-sm text-gray-600 py-3 lg:px-10 '>
                    <li className='py-1'>Account & Billing</li>
                    <li className='py-1'>Plans & Pricing</li>
                    <li className='py-1'>Supported Devices</li>
                    <li className='py-1'>Accessibility</li>
                </ul>
            </div>

            <div className='lg:py-6'>
                <div className='flex justify-between px-4 py-4 lg:px-10'>
                    <h3 className='uppercase text-sm font-bold text-gray-800'>About us</h3>
                    <i className='fa fas-arrow-down'></i>
                </div>
                <ul  className='px-4 text-sm text-gray-600 py-3 lg:px-10 '>
                    <li className='py-1'>Shop Hulu</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Contact</li>
                </ul>
            </div>
        </div>

        <div>Facebook</div>
    </div>
  )
}

export default Footer