import React from 'react'
import Header from '../../components/header'
import PageInfo from '../../components/pageInfo'
import SellCardArea from '../../components/sell/sellCardArea'

export default function CategoryPage(){
  return ( 
  <>
    <Header/>
    <PageInfo categoryName="Best Seller"/>
    <main className='general-container'>
        <SellCardArea/>
    </main>
  </>
    
  )
}
