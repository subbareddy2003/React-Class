import React from 'react'
import './Hero.css'

export default function DisplayHero(props) {
  return (
    <div className='hero-parent'>
        {
        props.myHeros.map((FavHero)=>(
            <div className='hero'>
         <p><b>Name: </b>{FavHero.name}</p>
         <p><b>Movie: </b>{FavHero.movie}</p>
         <p> <b>Release Date: </b>{FavHero.rd}</p>
         <img src={FavHero.pic} alt={FavHero.name}width="15%"/>
            </div>
        ))

        }
    </div>
  )
}
