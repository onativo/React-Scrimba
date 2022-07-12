import React from 'react'
import style from './Card.module.css'

export default function Card(props) {
  const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props;

  return(
    <div className={style.card}>
      <img src={props.item.imageUrl} alt='logo' className={style.img}/>
      <div>
        <div className={style.location}>
          <p className={style.country}><i class="bi bi-geo-alt-fill"></i>{props.item.location.toUpperCase()}</p>
          <a className={style.url} href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
        </div>
        <div className={style.about}>
          <h2>{props.item.title}</h2>
          <h5>{props.item.startDate} - {props.item.endDate}</h5>
          <p>{props.item.description}</p>          
        </div>
      </div>
    </div>
  ) 
}