import React, { useEffect, useRef, useState } from 'react'
import SellTopArea from './sellTopArea'
import HomeCard from '../cards/genelCard'
import { Book, Category } from '../../interface/general'
import { baseUrl } from '../../axios/baseUrl/pitonTechnology'
import axios from 'axios'

function SellContainer(props:{categories:Category[], books:Book[]}) {
  
  console.log("sell ici : ", props.categories);
  console.log("sell ici 2 : ", props.books);
   
  return ( 
    
    <div className='general-container'>
        <div className="categoryContainer my-9">
          {/* {props.categories.map(category => {
            return (
              <>
                <SellTopArea key={category.id} categoryId={category.id}  categoryName={category.name}/>
                <div className="sellMain w-full grid grid-cols-4 gap-5">
                  <HomeCard 
                    bookName='Dune'
                    bookAuthor='Frank Herbert' 
                    bookPrice='87,5'
                    bookPriceType='$'
                    containerFlexType='flex-row'
                    imageContainerWidth='w-2/5'
                    description_flexDirection='flex-col'
                    description_justifyContent='justify-between'
                    description_alignItems='items-start'
                    descriptionContainerWidth='w-3/5'
                    />
                </div>
                <div className="sellMain w-full grid grid-cols-4 gap-5">
                  <HomeCard 
                    bookName='Dune'
                    bookAuthor='Frank Herbert' 
                    bookPrice='87,5'
                    bookPriceType='$'
                    containerFlexType='flex-row'
                    imageContainerWidth='w-2/5'
                    description_flexDirection='flex-col'
                    description_justifyContent='justify-between'
                    description_alignItems='items-start'
                    descriptionContainerWidth='w-3/5'
                    />
                </div>
                <div className="sellMain w-full grid grid-cols-4 gap-5">
                  <HomeCard 
                    bookName='Dune'
                    bookAuthor='Frank Herbert' 
                    bookPrice='87,5'
                    bookPriceType='$'
                    containerFlexType='flex-row'
                    imageContainerWidth='w-2/5'
                    description_flexDirection='flex-col'
                    description_justifyContent='justify-between'
                    description_alignItems='items-start'
                    descriptionContainerWidth='w-3/5'
                    />
                </div>
                <div className="sellMain w-full grid grid-cols-4 gap-5">
                  <HomeCard 
                    bookName='Dune'
                    bookAuthor='Frank Herbert' 
                    bookPrice='87,5'
                    bookPriceType='$'
                    containerFlexType='flex-row'
                    imageContainerWidth='w-2/5'
                    description_flexDirection='flex-col'
                    description_justifyContent='justify-between'
                    description_alignItems='items-start'
                    descriptionContainerWidth='w-3/5'
                    />
                </div>
              </>
            
            )
            })} */}
          <SellTopArea categoryName='Best Seller'/>
          <div className="sellMain w-full grid grid-cols-4 gap-5">
            <HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice='87,5'
              bookPriceType='$'
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
              bookPrice='87,5'
              bookPriceType='$'
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
              bookPrice='87,5'
              bookPriceType='$'
              containerFlexType='flex-row'
              imageContainerWidth='w-2/5'
              description_flexDirection='flex-col'
              description_justifyContent='justify-between'
              description_alignItems='items-start'
              descriptionContainerWidth='w-3/5'
              /><HomeCard 
              bookName='Dune' 
              bookAuthor='Frank Herbert' 
              bookPrice='87,5'
              bookPriceType='$'
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
              bookPrice='87,5'
              bookPriceType='$'
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
              bookPrice='87,5'
              bookPriceType='$'
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
              bookPrice='87,5'
              bookPriceType='$'
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
              bookPrice='87,5'
              bookPriceType='$'
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