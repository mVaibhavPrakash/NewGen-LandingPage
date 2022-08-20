import {useEffect} from 'react';
import Landingpage from './Landingpage';

const LandingApp = ({footerRef}) => {
  useEffect(() =>{
    console.log('Hell')
      if(footerRef.current.style.display ==='none')
      footerRef.current.style.display ='revert'
			footerRef.current.style.width='100vw'
      return (() =>{
        console.log(footerRef)
      })
  },[footerRef])

  return (
    <Landingpage footerRef={footerRef}/>
  )
};

export default LandingApp;
