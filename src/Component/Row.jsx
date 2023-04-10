import React from 'react';
import RowDetails from './RowDetails';
import requests from '../Request'

const Row = () => {
  return (
    <div>
        <div className='w-full h-full'>
                <div className='flex overflow-x-scroll'>
                    <RowDetails categorie="TV Shows" title="Past & Current Seasons"  fetchImage={requests.image1}  />
                    <RowDetails categorie="Movies" title="New & Classic"  fetchImage={requests.image2}  />
                    <RowDetails categorie="Hulu Original" title="Groundbreaking" fetchImage={requests.image3}  />
                    <RowDetails categorie="premiums" title="Add-on" fetchImage={requests.image4}  />
                </div>
        </div>
    </div>
  )
}

export default Row