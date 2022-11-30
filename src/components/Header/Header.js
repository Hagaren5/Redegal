import React from 'react'

import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.navWebName}>
        <div className={classes.webname}>Redegal</div>
      </NavLink>
    </header>
  )
}

export default Header
