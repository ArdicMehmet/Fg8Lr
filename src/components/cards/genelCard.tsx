import React from 'react'
import Book from '../../images/Book.png'

interface Card{
  bookName: string,
  bookAuthor: string,
  bookPrice: number,
  containerFlexType: string,
  imageContainerWidth: string,
  imageContainerPadding?: string,
  /* image pt-5, px-12 for categoryCard */
  description_flexDirection:string, 
  description_justifyContent:string,
  description_alignItems:string,  
  descriptionContainerWidth:string,
 
}

function HomeCard(props:Card) {
  return (
    <>
        <div  className={`homeCard flex ${props.containerFlexType} w-full bg-deep_purple-400 bg-opacity-10 p-1 rounded hover:cursor-pointer`}>
            <div className={`cardImageContainer  ${props.imageContainerWidth} ${props.imageContainerPadding ? props.imageContainerPadding : ''}`}>
                <img className='w-full' src={Book} alt="bookImage" />
            </div>
            <div className={`cardDescriptionContainer flex pt-1 pb-2 ${props.description_flexDirection} ${props.description_justifyContent} ${props.description_alignItems} ${props.descriptionContainerWidth} ${props.containerFlexType == 'flex-col' ? 'px-8' : 'px-2'}`}>
                <div className="textContainer">
                  <p className="textHeader font-medium fontFamily-manrope">{props.bookName}</p>
                  <p className="textAuthor text-gray-900_99">{props.bookAuthor}</p>
                </div>
                <div className="priceText">
                  <p className='text-deep_purple-400 font-bold'>{props.bookPrice} $</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomeCard