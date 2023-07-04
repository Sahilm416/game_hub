import Git from './images/github.png'
import Linked from './images/linkedin.png'
import Mail from './images/gmail.png'
import './App.css'

export default function Contact (){
    return (
        <>
         <div className='whole-contact'>
         <div className='main-contact'>
           <div>
           <a href=""><img src={Git} alt="" /><h3>gitHub</h3></a>
           </div>
           <div>
           <a href=""><img src={Linked} alt="" /> <h3>Linkedin</h3></a> 
           </div>
           <div>
           <a href=""><img src={Mail} alt="" /><h3>G-mail</h3></a>
           </div>
         </div>
         </div>
         
        </>
    )
}