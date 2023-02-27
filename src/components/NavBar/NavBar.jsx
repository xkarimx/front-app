import React, {useState} from 'react'
import './navbar.css'


const Navbar = ()=>{

  const [isOpen, setIsOpen] = useState(false)

return (
 
  <nav>
   <div className='navbar'>
    
    <div className={`nav_items ${isOpen && "open"}`}>
      <div className='porfile'>
      
        <img className='img-navbar' src="./image/Rectangle 10.png" alt="" />

        <div className='porfile-text'>
        <p>Lucas Ezequiel Silva</p>
        <p>lucasezequielsilva@gmail.com</p>
        </div>
  
      </div>

      <div className='divAncor'><a  id="ancor"href="#">Read</a></div>      
        <a href="#">Register</a>
        <a href="#">Login</a>
        <a href="#">Logout</a>
    </div>
    <div className={`nav_toggle  ${isOpen && "open"}`} onClick={()=> setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
   
  </div>
  <div className='logo'>
      <img src="./image/Logo(1) 3.png" alt="logo" />
    </div>
  
 </nav>
)

}

export default Navbar
