import React from 'react'

const RowDetails = ({categorie , title , fetchImage }) => {
  return (
    <div className='w-full h-full p-5 flex flex-'>
        <div className=''>
            <div className='text-white'>
                <div className='relative lg:w-[290px] lg:h-[476px] md:w-[363px] md:h-[555px] w-[211px] h-[323px] '>
                    <img className='w-full h-full object-cover' src={fetchImage} alt={title}/>
                    <div className='absolute top-0 w-full h-full bg-gradient-to-br from-black p-5'>
                        <p>{title}</p>
                        <h3 className='text-white text-2xl'>{categorie}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RowDetails