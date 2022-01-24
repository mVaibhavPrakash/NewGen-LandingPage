import React, { Suspense } from 'react'
import {Routes,Route} from 'react-router-dom'
import '../css/App.css'
import Landingpage from './Landingpage';
const LandingApp = () => {
  return (
    <div className='landingapp'>
      <Landingpage/>
    </div>
  )
};

export default LandingApp;
