import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Showcase from '../components/Showcase'
import requests from '../lib/Requests'

function HomeScreen() {
  return (
    <div>
      <Header />
      <Showcase title="Available models" fetchURL={requests.fetchAllPhones} />
      <Footer />
    </div>
  )
}

export default HomeScreen
