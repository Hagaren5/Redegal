import React, { useState, useEffect } from 'react'
import classes from './Showcase.module.scss'
import { Link } from 'react-router-dom'
import requests from '../lib/Requests'

function Showcase() {
  const [phones, setPhones] = useState([])

  const base_url = requests.baseURL + requests.fetchAllPhones
  const noImage = './camera.svg'

  useEffect(() => {
    fetch(base_url)
      .then(resp => resp.json())
      .then(data => {
        setPhones(data)
        console.log(data)
      })
  }, [setPhones])

  return (
    <>
      {phones.map(phone => {
        return (          
          <ul key={phone.id}>
            <section className={classes.container}>
              <div className={classes.showcase__phone}>
                <Link to={`/${phone.id}`}>
                  <img src={phone.imgUrl ? phone.imgUrl : noImage} alt={phone.model} />
                </Link>
              </div>
            </section>
          </ul>
        )
      })}
    </>
  )
}

export default Showcase
