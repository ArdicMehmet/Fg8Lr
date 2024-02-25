import React from 'react'
import Header from '../../components/header'
import PageInfo from '../../components/pageInfo'
import HomeCard from '../../components/cards/genelCard'

import HeartBtn from '../../images/Icon/heart.png'

interface Book{
  bookName: string,
  bookAuthor: string,
  bookSummary: string,
  bookPrice: string,
  bookPriceType: string,
}

export function BookDetails(props:Book) {
  return (
    <>
        <Header/>
        <PageInfo categoryName='Book Details'/>
        <main className='general-container flex'>
            <div className="imageContainer w-1/4">
              <HomeCard 
                bookName='' 
                bookAuthor='' 
                bookPrice='' 
                bookPriceType=''
                containerFlexType='flex-col'
                imageContainerWidth='w-full'
                imageContainerPadding=' pt-5 px-12'
                description_flexDirection='flex-row'
                description_justifyContent='justify-between'
                description_alignItems='items-center'
                descriptionContainerWidth='w-full'
              />
            </div>
            <div className="infoContainer w-3/4 ps-20">
              <div className='flex justify-between'>
                <h1 className='text-[32px] md:text-3xl sm:text[28px] font-semibold pb-2.5'>{props.bookName}</h1>
                <img src={HeartBtn} className='cursor-pointer' alt="Heart" />
              </div>
              
              <h3 className='text-2xl md:text-[22px] sm:text-xl text-gray-900_99 font-semibold pb-14'>{props.bookAuthor}</h3>
              <p className='text-justify font-light'>
                <h5 className='font-bold pt-2.5 font-bold'>Summary</h5>
                {props.bookSummary}
              </p>
              <div className='w-[400px] h-[60px] bg-deep_orange-400 flex justify-between items-center py-2.5 px-5 rounded text-xl text-white-A700 cursor-pointer ms-auto mt-48'>
                <span className='font-bold'>{props.bookPrice}{props.bookPriceType}</span>
                <span className='font-semibold'>Buy Now</span>
              </div>
            </div>
        </main>
    </>
  )
}

