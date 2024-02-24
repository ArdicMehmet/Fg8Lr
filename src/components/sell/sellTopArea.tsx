import React from 'react'

interface HomeCard{
  categoryName:string,
}

function SellTopArea(props:HomeCard) {
  return (
    <div className="sellTopArea w-full flex justify-between mb-3">
        <p className="categoryContainer font-bold text-2xl cursor-pointer">{props.categoryName}</p>
        <p className='viewText text-deep_orange-400 font-semibold text-lg cursor-pointer'>View all</p>
    </div>
  )
}

export default SellTopArea