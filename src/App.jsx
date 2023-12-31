import Nav from './Nav'

import About from './About'
import Contact from './Contact'
import Loader from './loader'
import './App.css'
import {BrowserRouter, NavLink,Route,Routes } from 'react-router-dom'
import { Suspense,lazy, useEffect, useReducer, useState } from 'react'

import SmoothScrollbar from 'smooth-scrollbar'





const Games = lazy(()=> import('./Games'));
const Home = lazy(()=> import('./Home'));
function App() {
 

const [pg,setPg] = useState(0);



document.addEventListener('scroll',()=>{
  var percent = (document.documentElement.scrollTop /(document.documentElement.scrollHeight - window.innerHeight))*100;
   setPg(percent);
})

  return (
    <>
     <Nav/>
    
     <div style={{
      width:`${pg}%`
     }} className='progress-bar'></div>
     

    <Suspense fallback={<Loader/>}>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/About" element={<About/>} />
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/Games" element={<Games/>} />
       
    </Routes>
    </Suspense>
    
    </>
  )
}

export default App
