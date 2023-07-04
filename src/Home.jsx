import { NavLink } from 'react-router-dom'
import './Home.css'
import Clip from './clips/back-clip.mp4'

import { useReducer ,useEffect} from 'react'







function reducer (effect,action)
{
  if(action.Type === "over")
  {
   
    return {
      ...effect,
      width: action.payload,
      borderRadius:"10px 0px 10px 0px",
      color:"black",
    
    }
  }
  else{
    return {
      ...effect,
      width: action.payload
  }
}
}



export default function(){





    const [effect,dispatch] = useReducer(reducer,{width:"0px",borderRadius:"0px",color:"white"});
 
    useEffect(()=>{
        
    },[])

    return(
        <>
     <video className='clip' muted autoPlay loop>
        <source src={Clip} />
     </video>
     <div className='container' >
          <h1>World Class <span style={
            {
              color: "red",
              textShadow:"0px 0px 10px red"
          }
          }>Games</span> <br /> 
            All together.
          </h1>
         <div className='btn-div'>
              <div className='btn-main'>
                  <div  className='btn' onMouseEnter={()=>{dispatch({Type:"over",payload:"200px"})}}
                   onMouseLeave={()=>{dispatch({Type:"not",payload:"0px"})}}   >
                    <div className='effect' style={effect}></div>
                    <span className='txt' style={{
                      zIndex:"2"
                      
                    }}> <NavLink to="./games" style={(onmouseenter)=>{
                      
                        return onmouseenter ? {color:"black"} : {color:"white"}
                    }}  >enter now</NavLink> </span>
                  </div>
              </div>
         </div>
     </div>


        </>
    )
}
