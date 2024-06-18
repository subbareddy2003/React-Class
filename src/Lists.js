import React,{useState} from 'react'

export default function Lists() {
   const[employees,setEmployees]=useState([
   
        {
            name:"subbu",
            city:"kadapa",
            gender:"male",
            age:20
        },
        {
            name:" mrsubbu",
            city:"kadapa",
            gender:"male",
            age:20
        },
        {
            name:"mrreddy",
            city:"kadapa",
            gender:"male",
            age:20
        }

   ])
 return (
    <div> 
        {
            employees.map((emp)=>(
                <div>
                    <p>Name: {emp.name}</p>
                    <p>City: {emp.city}</p>
                    <p>Age: {emp.age}</p>
                    <p>Gender: {emp.gender}</p>
                </div>

            ))
        }    

        
    
      
    </div>
  )
}
