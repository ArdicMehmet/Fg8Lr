import React from 'react'
import logo from '../../images/logo.png'
import Button from '../../components/button'


export const RegisterPage:React.FC = () => {
  return (
    <div className="loginContainer flex mx-auto">
        <div className="leftPage flex-1 bg-[url('./images/home-bg.png')] h-screen maskPurple bg-cover"></div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="logoContainer h-1/5 flex justify-center items-center">
            <img className='logo object-cover' src={logo} loading={'lazy'} alt="logo" />
          </div>
          <div className="main w-full h-3/5 flex justify-center items-center">
            <div className="formContainer flex flex-col justify-center">
              <p className='text-2xl md:text-[22px] sm:text-xl text-gray-900_99 font-semibold'>Welcome Back!</p>
              <p className='text-[32px] md:text-3xl sm:text[28px] font-bold'>Login to your account</p>
              <form className='mt-6'>
                <div className="grid gap-2 mb-1 md:grid-cols-1">
                  <div>
                    <div className="mb-6">
                      <label htmlFor="name" className="text-left text-gray-900 text-xl font-semibold">Name</label>
                      <input type="name" id="name" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" placeholder="John Doe" required />
                    </div> 
                  </div>
                </div>
                <div className="grid gap-2 mb-1 md:grid-cols-1">
                  <div>
                    <div className="mb-6">
                      <label htmlFor="email" className="text-left text-gray-900 text-xl font-semibold">Email address</label>
                      <input type="email" id="email" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" placeholder="john.doe@company.com" required />
                    </div> 
                  </div>
                </div>
                <div className="grid gap-2 md:grid-cols-1">
                  <div>
                    <div className="mb-1">
                      <label htmlFor="password" className="text-left text-gray-900 text-xl font-semibold">Password</label>
                      <input type="password" id="password" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" placeholder="******" required />
                    </div> 
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-1/5 flex flex-col items-center">
              <Button name='Register' className='common-pointer cursor-pointer font-bold h-[60px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[330px] rounded border border-deep_orange-400 border-solid text-white-A700 bg-deep_orange-400' />      
              <Button name='Login' className='common-pointer cursor-pointer font-bold h-[60px] leading-[normal] mt-2.5 text-2xl md:text-[22px] text-center sm:text-xl w-[330px] rounded border border-deep_purple-400 border-solid text-deep_purple-400'/>      
          </div>
        </div>
      </div> 
  )
}

