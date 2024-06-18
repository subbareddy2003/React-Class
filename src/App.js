// import { useState } from "react"
// import Props from "./Props"
// import UserData from "./UserData"
// import Lists from "./Lists"
// import Hero from "./Hero"

// function App(){
//    const [name,setName]=useState('subbu')
//    const [year,setyear]=useState(2024)
//    const [institute,setInstitute]=useState('Codegnan')
//   return(
    
//     <div>
//       <UserData/>
//       {/* <Hero/> */}
      
//       {/* <Lists/> */}

    
    
      

//       {/* <p>hello everyone</p>
//     //   <h1> welcome to gaming jone</h1>
//     //   <p>Name:{name} Year of join: {year} <br></br> Institute Name :{institute}</p>
//     //  <Props studentName="subbu" studentRollNo="7"/>
//     //  <Props studentName="mr reddy"studentRollNo="07"/> */}

//     </div>
  

//   )
// }
// export default App

import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'
export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      

      


    </Routes>
      
    </BrowserRouter>
  )
}
