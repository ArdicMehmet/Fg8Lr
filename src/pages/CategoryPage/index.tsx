import React from 'react'
import Header from '../../components/header'
import PageInfo from '../../components/pageInfo'
import SellCardArea from '../../components/sell/sellCardArea'

export const CategoryPage:React.FC = ()=>{
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
