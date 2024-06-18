import React,{useState} from 'react'
import DisplayHero from './DisplayHero'
export default function Hero() {
    const[hero,setHero]=useState([
        {
            name:"Prabhas",
            movie:"kalki",
            rd:2024,
            pic:"https://im.rediff.com/movies/2020/oct/23prabhas1.jpg"
        },
        {
            name:"NTR",
            movie:"Devara",
            rd:2024,
            pic:"https://cdn.123telugu.com/content/wp-content/uploads/2024/05/devara-3-1.jpg"
        },
        {
            name:"Allu Arjun",
            movie:"pushpa",
            rd:2024,
            pic:"https://www.newsbugz.com/wp-content/uploads/2021/11/pushpa-movie.jpg"
            
        }
    ])
  return (
    <div className="Hero-container">
      <DisplayHero myHeros={hero}/>
    </div>
  )
}
