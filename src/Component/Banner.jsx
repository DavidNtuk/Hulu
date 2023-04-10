import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-full py-12 mx-auto text-center p-10 flex justify-center'>
        <div className='max-w-[500px] md:max-w-[800px] lg:max-w-[900px] pt-8'>
            <h3 className='text-green-500 font-bold uppercase'>included in all plans</h3>
            <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-bold py-4
            '>All The TV You Love</h1>
            <p className='text-white text-[20px] md:pt-3'>Watch full seasons of exclusively streaming series, current-season episodes, hit movies, Hulu Originals, kids shows, and more.</p>
        </div>
    </div>
  )
}

export default Banner