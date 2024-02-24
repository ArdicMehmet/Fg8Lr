import Header from '../../components/header'
import Carousel from '../../components/aliceCarousel'
import SellContainer from '../../components/sell/sellContainer'
import React from 'react'
import SellCardArea from '../../components/sell/sellCardArea'

export const HomePage:React.FC = () => {
  return (
    <>
      <Header/>
      <main className='general-container'>
        <Carousel/>                      {/* Homepage main slider */} 
        <SellContainer/>                 {/* Preview Cards of Books */}
      </main>
    </>
    
  )
}