import React, { useState, useEffect } from 'react'
import classes from './Showcase.module.scss'
import { Link } from 'react-router-dom'
import { get } from '../lib/httpClient'

function Showcase() {
  const [phones, setPhones] = useState([])

  const noImage = './camera.svg'

  useEffect(() => {
    get().then(data => {
        setPhones(data)
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
