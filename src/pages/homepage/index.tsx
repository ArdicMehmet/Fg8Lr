import Header from '../../components/header'
import Carousel from '../../components/aliceCarousel'
import SellContainer from '../../components/sell/sellContainer'
import React, { useEffect, useState } from 'react'
import SellCardArea from '../../components/sell/sellCardArea'
import axios, {isCancel, AxiosError} from 'axios';
import { Category, Book } from '../../interface/general'
import { baseUrl } from '../../axios/baseUrl/pitonTechnology'

 export default function HomePage(){

  const [categories,setCategories] = useState(Array<Category>)
  const [books,setBooks] = useState(Array<Book>)
  useEffect(()=>{
    axios.get(`${baseUrl}api/rest/categories`)
      .then(function (response) {        
        setCategories([...response.data.category]);  
      }).then(_=>{
        categories.forEach((category) => {
          axios.get(`${baseUrl}api/rest/products/${category.id}/${category.name}`)
          .then(response=>{
            setBooks([...books, ...response.data.product])
          })
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
         
      });

    },[])
  
  return (
    <>
      <Header/>
      <main className='general-container'>
        <Carousel/>                                                         {/* Homepage main slider */} 
        <SellContainer categories={categories} books={books}/>                 {/* Preview Cards of Books */}
      </main>
    </>
    
  )
}
