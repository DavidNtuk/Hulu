import React from 'react'

const HuluBaanner = () => {
  return (
    <div className='w-full h-full py-12 mx-auto text-center p-10 flex justify-center'>
        <div className='max-w-[500px] md:max-w-[800px] lg:max-w-[900px] pt-8'>
            <h3 className='text-green-500 font-bold uppercase text-sm'>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</h3>
            <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-bold py-4
            '>Live TV Makes It Better</h1>
            <p className='text-white text-md md:pt-3'>Make the switch from cable. Get 85+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV recordings for up to nine months and fast-forward through your DVR content. Access endless entertainment with Disney+ and live sports with ESPN+. </p>
            <p className='text-gray-600 text-[10px] py-6'>Regional restrictions, blackouts and Live TV terms apply. Access content from each service separately. Location data required to watch certain content. Unlimited DVR recording is not available for on-demand shows.</p>
            <button className=' border-b-2 uppercase text-white text-sm'>View Channels in your area </button>
        </div>
    </div>
  )
}

export default HuluBaanner