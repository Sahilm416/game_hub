import { useEffect,useReducer,useState } from "react"
import './games.css'
import { lazy,Suspense } from "react"

import Aos from "aos"



function reducer (dataset,Action)
{
    if(Action.Type == "update")
    {
        return {
            ...dataset,
            arr: Action.Payload
    }
    }
    else {
        return {
            ...dataset,
        }
    }

}

function reducer1 (details,Action)
{
    if(Action.Type == "load")
    {
        return {
            ...details,
            screenshots: Action.Payload,
            gen: Action.genre,
            tags: Action.tags,
            name: Action.name
    }
    }
    else {
        return {
            ...details,
        }
    }

}

export default function Games (){


const[page,setPage] = useState(1);
const [dataset,dispatch] = useReducer(reducer,{arr:[]});
const [show,setShow] = useState(true);
const [details,dispatch1] = useReducer(reducer1,{screenshots:[],gen:[],tags:[],name:" "});
const [back,setBack] = useState(" ");

const [y,setY] = useState("0");

let count = 0;


   const incr = ()=>{
     if(show)
     {
        setPage(page+1);
        load();
     }

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
   }
   const dcr = ()=>{

    if(page >= 2 && show)
    {
        setPage(page-1);
    }
    else{
        setPage(page)
    }
    
    
    if(show){
       window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    load(); 
    }
    else{
        window.scrollTo({
            top: `${y}` ,
            behavior: 'smooth',
        }); 
        setShow(true);
    }
    
   
 }


    const load = async ()=>{
          try{
            let data = await fetch("https://api.rawg.io/api/games?key=0d32a1e3553c48719e6523cbb0628f07&page="+page);
          let final = await data.json();
        dispatch({Type:"update",Payload:final.results})
        
          }
          catch(error){
             console.log(error)
          }
    }


   const setDetails = (ss,gg,tt,nn)=>{
    dispatch1({Type:"load",Payload:ss,genre:gg,tags:tt,name:nn});
    setY(window.scrollY);
   
  
    setBack(ss[0].image);
    setShow(false)
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
   }






    useEffect(()=>{
       
      
       load();
      

       return ()=> load();
    },[])

 
    return (
        <>
            {show ? <div   className="content" id="scroll" >
            {dataset.arr.map((post)=>{
                return(
                    <>
                    
                    <div key={post.id} className="whole"  onClick={()=>{
                        console.log(post)
                        setDetails(post.short_screenshots,post.genres,post.tags,post.name)
                    }} >
                         <div className="card-head">
                         <h2>{post.name}</h2> 
                         </div>
                         <div className="card-img" >
                         <img className="imgs" src={post.background_image} alt="img" />
                         </div>
                         <div className="card-tail">
                               <button  >learn more</button>
                             </div>
                      </div>

                   
                    </>
                )
            })}
            </div> :
               
            
                <div className="whole2" >
                <div className="top" style={{
                    backgroundImage:`url(${back})`,
                    zIndex:"-1"
                }}>
                  <div className="effect">
                  <h1 style={
                    {textAlign:"center",color:"white"}
                }> {details.name}</h1>
                  </div>

                </div>
                <h2 style={{
                    textAlign:"center",color:"white"
                }}>screenshots:</h2>
                 <div className="ss">
                 
                 {details.screenshots.slice(1,8).map((ss)=>{
                        return (
                            <>
                              <img className="img-details" src={ss.image} alt="" />
                             

                            </>
                        )
                    }) }
                 </div>
                 <hr />
                  <div className="genres">
                  <h2 style={{
                    color:"white"
                  }}>Genres:&nbsp;</h2>
                  {details.gen.map((gg)=>{
                    return(
                        <>
                            <h4>#{gg.name}</h4>
                        </>
                    )
                   })}
                  </div>
                  <hr />
                  <h2 style={{
                    textAlign:"center", color:"white"
                  }}>Tags:</h2>
                   <div className="tags">
                   
                   {details.tags.map((tt)=>{
                    return(
                        <>
                            <p>+{tt.name}</p>
                        </>
                    )
                   })}
                   </div>
                    
                    

                </div>
                    
               
            }
            <div className="foot">
            <div className="last">
            <button onClick={dcr}>prev</button> <button onClick={incr}>next</button>
            </div>
            </div>
        </>
    )
}