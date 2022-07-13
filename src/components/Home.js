import React, { Fragment } from 'react';
import Header from './header/Header';
import './home.scss';
import Footer from './footer/Footer';
import Banner from './banner/Banner';
import ProductList from './productList/ProductList';


export default function Home() {
  return (
    <Fragment>
        <Header/>
        <Banner />
        <ProductList />
        <Footer /> 
    </Fragment>
    
  )
}
