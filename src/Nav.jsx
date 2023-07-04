import { Link,NavLink } from "react-router-dom"
import './nav.css'
import { useEffect, useState } from "react";
import { ReactDOM } from "react";
export default function Nav (){

   const run = ()=>{
    console.log("  home click")
    window.location.href="/";
   }

   const[mob,setMob] = useState(true);
   const[menu,setMenu] = useState(false);


   

   window.addEventListener('resize',()=>{
     if(window.innerWidth < 520){
      setMob(false)
      
     }
     else{
      setMob(true)
     }
     
   })
   useEffect(()=>{
    if(window.innerWidth < 520){
      setMob(false)
      
     }
     else{
      setMob(true)
     }

     setMenu(false)
  

   },[])




   const showMenu =()=>{
    
    
      setMenu(!menu)
     
     
    
   }
  

 

    return(
        <>
          <ul>
           <h2>
              game<span style={{
                color:"red"
              }}>hub</span>
           </h2>
           {mob ? <div>
           <li><NavLink onClick={run} to="/"   style={({isActive})=>{
               return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
           }} > Home </NavLink></li>
            <li><NavLink  to="/About"  style={({isActive})=>{
                 return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
            }}> About </NavLink></li>
            <li><NavLink to="/Contact" style={({isActive})=>{
                 return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
            }}> contact </NavLink></li>
           <li><NavLink  to="/Games" style={({isActive})=>{
                 return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
            }}> Games </NavLink></li>
            </div> :
              <div className="mob">

                <div class="material-symbols-outlined" onClick={showMenu}>{!menu ? "menu" : "close"}</div>
              </div>
            }
          </ul>

          <div id="main" onClick={()=>{
           
            setMenu(!menu)
          }}>

          {menu ? <div className="menu" id="menu" >
          <div >
           <li><NavLink onClick={run} to="/"   style={({isActive})=>{
               return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
           }} > Home </NavLink></li>
            <li><NavLink to="/About"  style={({isActive})=>{
                 return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
            }}> About </NavLink></li>
            <li><NavLink to="/Contact" style={({isActive})=>{
                 return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
            }}> contact </NavLink></li>
           <li><NavLink to="/Games" style={({isActive})=>{
                 return isActive ? {color: "red", borderBottom:" 2px solid red"} : {color:" white"}
            }}> Games </NavLink></li>
            </div>

          </div> : <></> }
          </div>
        </>
    )
}