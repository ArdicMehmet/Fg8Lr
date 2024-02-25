import backArrowIcon from '../images/Icon/Back-Arrow.png'

interface CategoryInfo{
    categoryName: string;
}

function PageInfo(props:CategoryInfo) {
  return (
    <div className='general-container flex items-center cursor-pointer mt-10 mb-8'>
        <div className="imgContainer flex justify-center items-center">
            <img className='me-2 mt-1 item-end object-cover' src={backArrowIcon} alt="backArrow" />
        </div>
        <span className='text-xl font-semibold'>{props.categoryName}</span>
    </div>
  )
}

export default PageInfo