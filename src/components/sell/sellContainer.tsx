import React from 'react'
import SellTopArea from './sellTopArea'
import HomeCard from '../cards/genelCard'

function SellContainer() {
  return ( 
    <div className='general-container'>
        <div className="categoryContainer mb-6">
          <SellTopArea categoryName='Best Seller'/>
          <div className="sellMain w-full grid grid-cols-4 gap-8">
            <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
              <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
              <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
              <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
          </div>
        </div>

        <div className="categoryContainer mb-6">
          <SellTopArea categoryName='Classics'/>
          <div className="sellMain w-full grid grid-cols-4 gap-2">
          <HomeCard 
            bookName='Dune' 
            bookAuthor='Frank Herbert' 
            bookPrice={87.5} 
            containerFlexType='flex-row'
            imageContainerWidth='w-2/5'
            description_flexDirection='flex-col'
            description_justifyContent='justify-between'
            description_alignItems='items-start'
            descriptionContainerWidth='w-3/5'
          />
            <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
              <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
              <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice={87.5} 
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              />
            </div>
        </div>
        
    </div>
  )
}

export default SellContainer