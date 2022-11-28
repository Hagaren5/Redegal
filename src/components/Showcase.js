import React, { useState, useEffect } from 'react'
import classes from './Showcase.module.css'
import { Link } from "react-router-dom";
import requests from '../lib/Requests'

function Showcase({ title }) {
  const [phones, setPhones] = useState([])

  const base_url = requests.baseURL + requests.fetchAllPhones 
  
  useEffect(() => {
    fetch(base_url)
      .then(resp => resp.json())
      .then(data => {
        setPhones(data)
        console.log(data)
      })
  }, [setPhones])

  
  return (
    <div>
      <h1>{title}</h1>
      {phones.map((phone) => {
                return (
                    <div className={classes.showcase__phone}>
                        <p>{phone.brand}</p>
                    </div>
                );
            })}
    </div>
  )
}

export default Showcase
