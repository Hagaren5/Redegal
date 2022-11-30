import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import classes from './PhoneDetails.module.scss'
import Header from '../components/Header/Header'
import { getById } from '../lib/httpClient'

function PhoneDetails() {
  const { phoneId } = useParams()
  const [phone, setPhone] = useState(null)

  useEffect(() => {
    getById(phoneId).then(data => {
      setPhone(data)
    })
  }, [phoneId])

  if (!phone) {
    return null
  }

  const imageURL = phone.imgUrl

  return (
    <>
      <Header />
      <div className={classes.phonedetails__container}>
        <img src={imageURL} alt={phone.model}></img>
        <div className={classes.description}>
          <p>
            <strong>Brand:</strong> {phone.brand}
          </p>
          <p>
            <strong>Model:</strong> {phone.model}
          </p>
          <p>
            <strong>Price:</strong> {phone.price}
          </p>
          <p>
            <strong>CPU:</strong> {phone.cpu}
          </p>
          <p>
            <strong>RAM:</strong> {phone.ram}
          </p>
          <p>
            <strong>Operating System:</strong> {phone.os}
          </p>
          <p>
            <strong>Screen Resolution:</strong> {phone.displayResolution}
          </p>
          <p>
            <strong>Battery:</strong> {phone.battery}
          </p>
          <p>
            <strong>Primary Camera:</strong> {phone.primaryCamera}
          </p>
          <p>
            <strong>Secondary Camera:</strong> {phone.secondaryCmera}
          </p>
          <p>
            <strong>Dimensions:</strong> {phone.dimentions}
          </p>
          <p>
            <strong>Weight:</strong> {phone.weight}
          </p>
          <div className={classes.actions}>
            <strong>Options:</strong>
            <p className={classes.actions}>
              <strong>Available colors: </strong>
              {phone.options.colors.map(color => color.name)}
            </p>
            <p className={classes.actions}>
              <strong>Capacity: </strong>
              {phone.options.storages.map(strg => strg.name).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PhoneDetails
