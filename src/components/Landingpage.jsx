import React from 'react';
import Top from './Top';
import Cards from './Cards';
import Navbar from './Navbar'
import Footer from './Footer'
import '../css/Landingpage.css'

const Landingpage = () => {
  return(
    <div className='lpage'>
        <Navbar/>
        <Top />
        <Cards />
        <Footer/>
    </div>
  )
};

export default Landingpage;
