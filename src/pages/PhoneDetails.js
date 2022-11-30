import React from 'react'
import phone from './phone.json'
import classes from './PhoneDetails.module.scss'

function PhoneDetails() {
  const imageURL = phone.imgUrl
  return (
    <div className={classes.phonedetails__container}>
     <img src={imageURL} alt={phone.model} ></img>
     <div>
        <p><strong>Brand:</strong> {phone.brand}</p>
        <p><strong>Model:</strong> {phone.model}</p>
        <p><strong>Price:</strong> {phone.price}</p>
        <p><strong>CPU:</strong> {phone.cpu}</p>
        <p><strong>RAM:</strong> {phone.ram}</p>
        <p><strong>Operating System:</strong> {phone.os}</p>
        <p><strong>Screen Resolution:</strong> {phone.displayResolution}</p>
        <p><strong>Battery:</strong> {phone.battery}</p>
        <p><strong>Primary Camera:</strong> {phone.primaryCamera}</p>
        <p><strong>Secondary Camera:</strong> {phone.secondaryCmera}</p>
        <p><strong>Dimensions:</strong> {phone.dimentions}</p>
        <p><strong>Weight:</strong> {phone.weight}</p>
        <p>
          <strong>Available colors: </strong>{phone.options.colors.map(color => color.name)}
        </p>
        <p>
          <strong>Capacity: </strong>{phone.options.storages.map(strg => strg.name).join(", ")}
        </p>
     </div>
    </div>
  )
}

export default PhoneDetails