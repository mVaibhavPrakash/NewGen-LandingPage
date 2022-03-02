import React,{ useEffect,useContext} from 'react';
import Top from './Top';
import Cards from './Cards';
import Navbar from './Navbar'
import '../css/Landingpage.css'

const Landingpage = ({footerRef}) => {
  useEffect(() =>{
    return () => {
      if(footerRef !== null && footerRef.current)
        footerRef.current.style.width='100vw'
      }
})
  return(
    <div className='lpage'>
        <Navbar/>
        <Top />
        <Cards />
    </div>
  )
};

export default Landingpage;
