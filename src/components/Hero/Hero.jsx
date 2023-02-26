import React from 'react'
import './hero.css'
import NavBar from '../../layouts/NavBar/NavBar'
import HeaderInfo from '../HeaderInfo/HeaderInfo'
import InfoMain from '../InfoMain/InfoMain'

export default function Hero() {
  return (
        <div>
            <section className="header">
            <NavBar />
            <HeaderInfo />
            </section>
            <InfoMain />     
        </div>
  )
}
