import React from 'react'
import logo from '../img/logo.svg'
import style from './Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <nav className={style.navbar}>
        <img src={logo} alt='logo' className={style.logo}/>
        <h2 className={style.title}>my travel journal.</h2>
      </nav>
    </div>
  )
}
