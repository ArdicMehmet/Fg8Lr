import logo from '../images/logo.png'
import heartImage from '../images/Heart.png'
import profileImage from '../images/Profile.png'
import shopImage from '../images/Shop.png'

function Header() {
  return (
    <header className='w-full h-[120px] flex general-container'>
        <div className="brand flex items-center w-1/6">
            <img className='w-[60px] h-[39px]' src={logo} alt="logo" />
        </div>
        <div className='flex justify-center items-center w-4/6'>
            <div className='findContainer w-full relative text-[20px]'>
                <input type="text" className='w-full h-[50px] outline-0 ps-[40px] rounded bg-gray-50' placeholder='Search'/>
            </div>
            
        </div>
        <div className='profileMenu flex justify-end items-center w-1/6'>
            <img src={profileImage} className='me-2 hover:cursor-pointer' alt="profilePhoto" />
            <img src={heartImage} className='me-2 hover:cursor-pointer' alt="heartPhoto" />
            <img src={shopImage} className='hover:cursor-pointer' alt="shopPhoto" />
        </div>
    </header>
  )
}

export default Header