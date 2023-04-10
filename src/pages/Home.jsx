import React from 'react'
import Banner from '../Component/Banner'
import BannerTwo from '../Component/BannerTwo'
import HuluBaanner from '../Component/HuluBaanner'
import Row from '../Component/Row'
import Showcase from '../Component/Showcase'
import SportLinks from '../Component/SportLinks'

const  Home = () => {
  return (
    <>
      <Showcase /> 
      <Banner/>
      <Row />
      <HuluBaanner />
      <SportLinks />
      <BannerTwo/>
    </>
  )
}

export default Home