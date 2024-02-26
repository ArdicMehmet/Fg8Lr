import React, { MouseEventHandler } from 'react';
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom'
import logo from '../../images/logo.png'
import Button from '../../components/button'
import { validateForm } from '../../validations/registerValidation';
import axios from 'axios';
import { baseUrl } from '../../axios/baseUrl/pitonTechnology';
import Checkbox from '../../components/checkbox';


export default function LoginRegisterPage(props:{pageType:'register' | 'login'}){
  
  let navigate = useNavigate();
  
  const registerFormik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values => {    
      const formTest = validateForm(values);
      let errorDescription:string = ''
      if(!formTest.status){

        formTest.errors.name ? errorDescription=formTest.errors.name : ''
        formTest.errors.email ? errorDescription=formTest.errors.email : ''
        formTest.errors.password ? errorDescription=formTest.errors.password : ''
        
        alert(errorDescription);
      }
      else{
        axios({
          method: 'post',
          url: `${baseUrl}api/rest/register`,
          headers: {}, 
          data: {
            ...values
          }
        }).then(response => {
          if(response.status == 200){
            alert('Register is successfully, you are being directed...')
            navigate('/login');
          }
        }).catch(e=>{})
      }

    },
  });
  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {    
      console.log(values);
      
      
      axios({
        method: 'post',
        url: `${baseUrl}api/rest/login`,
        headers: {}, 
        data: {
          ...values
        }
      }).then(response => {
        console.log("Then icinde");
        
        if(response.status != 200){
          alert('Register is successfully, you are being directed...')
          navigate('/home');
        }
      }).catch(e=>{
        
        alert('Register is unsuccessfully, you are being directed...')
        navigate('/home');
      })
      

    },
  });

  return (
    <div className="loginContainer flex mx-auto">
        <div className="leftPage flex-1 bg-[url('./images/home-bg.png')] h-screen maskPurple bg-cover"></div>
          <div className="flex flex-1 flex-col justify-start">
            <div className="logoContainer flex justify-center items-center mt-20 mb-24">
              <img className='logo object-cover' src={logo} loading={'lazy'} alt="logo" />
            </div>
            <div className="main w-full h-3/5 flex justify-center items-center">
              <div className="formContainer flex flex-col justify-center">
                <p className='text-2xl md:text-[22px] sm:text-xl text-gray-900_99 font-semibold'>Welcome Back!</p>
                <p className='text-[32px] md:text-3xl sm:text[28px] font-bold'>Login to your account</p>
                
                { 
                props.pageType == 'register' ? 
                <form className='mt-6' onSubmit={registerFormik.handleSubmit}>
                  <div className="grid gap-2 mb-1 md:grid-cols-1">
                    <div>
                      <div className="mb-6">
                        <label htmlFor="name" className="text-left text-gray-900 text-xl font-semibold">Name</label>
                        <input type="name" id="name" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" onChange={registerFormik.handleChange}
                          value={registerFormik.values.name} placeholder="John Doe" required />
                      </div> 
                    </div>
                  </div>
                <div className="grid gap-2 mb-1 md:grid-cols-1">
                  <div>
                    <div className="mb-6">
                      <label htmlFor="email" className="text-left text-gray-900 text-xl font-semibold">Email address</label>
                      <input type="email" id="email" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" onChange={registerFormik.handleChange}
                      value={registerFormik.values.email} placeholder="john.doe@company.com" required />
                    </div> 
                  </div>
                </div>
                <div className="grid gap-2 md:grid-cols-1">
                  <div>
                    <div className="mb-1">
                      <label htmlFor="password" className="text-left text-gray-900 text-xl font-semibold">Password</label>
                      <input type="password" id="password" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" onChange={registerFormik.handleChange}
                      value={registerFormik.values.password} placeholder="******" required />
                    </div> 
                  </div>
                </div>
                <div className="w-full flex flex-col items-center mt-12">
                    <Button name='Register' type='submit' className='common-pointer cursor-pointer font-bold h-[60px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[330px] rounded border border-deep_orange-400 border-solid text-white-A700 bg-deep_orange-400' />      
                    <Button name='Login' type='button' className='common-pointer cursor-pointer font-bold h-[60px] leading-[normal] mt-2.5 text-2xl md:text-[22px] text-center sm:text-xl w-[330px] rounded border border-deep_purple-400 border-solid text-deep_purple-400'/>      
                </div>
                </form> :
                <form className='mt-6' onSubmit={loginFormik.handleSubmit}>
                <div className="grid gap-2 mb-1 md:grid-cols-1">
                  <div>
                    <div className="mb-6">
                      <label htmlFor="email" className="text-left text-gray-900 text-xl font-semibold">Email address</label>
                      <input type="email" id="email" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" onChange={loginFormik.handleChange}
                      value={loginFormik.values.email} placeholder="john.doe@company.com" required />
                    </div> 
                  </div>
                </div>
                <div className="grid gap-2 md:grid-cols-1">
                  <div>
                    <div className="mb-1">
                      <label htmlFor="password" className="text-left text-gray-900 text-xl font-semibold">Password</label>
                      <input type="password" id="password" className="w-full rounded bg-gray-50 text-gray-900_66 pb-[13px] pt-[16px] px-[13px] outline-0 text-gray-900_66" onChange={loginFormik.handleChange}
                      value={loginFormik.values.password} placeholder="******" required />
                    </div> 
                  </div>
                </div>
                <div className="grid md:grid-cols-1">
                    <div>
                      <Checkbox classNameForInput=' accent-deep_purple-400 border-deep_purple-400' classNameForLabel='text-deep_purple-400' labelName='Remember Me' inputName='rememberMe'/>
                    </div>
                  </div>
                  <div className="w-full flex flex-col items-center mt-12">
                    <Button name='Login' type='submit' className='common-pointer cursor-pointer font-bold h-[60px] leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[330px] rounded border border-deep_orange-400 border-solid text-white-A700 bg-deep_orange-400' />      
                    <Button name='Register' type='button' className='common-pointer cursor-pointer font-bold h-[60px] leading-[normal] mt-2.5 text-2xl md:text-[22px] text-center sm:text-xl w-[330px] rounded border border-deep_purple-400 border-solid text-deep_purple-400'/>      
                  </div>
                <div className="w-full h-1/5 flex flex-col items-center">
              
              </div>
                </form>
                }

              </div>
            </div>
            
          </div>
      </div> 
  )
}

