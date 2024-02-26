import React from 'react'

interface HomeCard{
  categoryName:string,
}

function SellTopArea(props:HomeCard) {
  return (
    <div className="sellTopArea w-full flex justify-between mb-5">
        <p className="categoryContainer font-bold text-3xl cursor-pointer">{props.categoryName}</p>
        <p className='viewText text-deep_orange-400 font-bold text-xl cursor-pointer flex items-end' >View all</p>
    </div>
  )
}

export default SellTopArea