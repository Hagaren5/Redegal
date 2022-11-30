import React from 'react'

import classes from './HomeScreen.module.scss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/Showcase'

function HomeScreen(props) {
  return (
    <>
      <Header />
      <div className={classes.phones}>
        <Showcase filter={props.filter} />
      </div>
      <Footer />
    </>
  )
}

export default HomeScreen
