import React from 'react'
import './navbar.css'

export default function NavBar() {
    let img1 = <img src="./image/menu.png" alt="" />
    let img2 = <img src="./image/Logo(1) 3.png" alt="logo" />
  return (
    <nav className="header-box">
        {img1}
        {img2}
    </nav>
  )
}
