import React,{ useEffect} from 'react';
import Top from './Top';
import Cards from './Cards';
import Navbar from './Navbar'
import '../css/Landingpage.css'
import img1 from '../../../../../public/img/wave.png'

const Landingpage = ({footerRef}) => {
  useEffect(() =>{
    return () => {
      if(footerRef !== null && footerRef.current)
        footerRef.current.style.width='100vw'
      }
})
  return(
    <div className='lpage'>
      <div className='auth'>
		    <img className="auth-wave" src={img1}/>
      </div>
        <Navbar/>
        <Top />
        <Cards />
    </div>
  )
};

export default Landingpage;
