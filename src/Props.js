import React from 'react'

export default function props(props) {
  return (
    <div>
       <h1> this is Props component</h1>
       <p>Name is :<b>{props.studentName}</b>  Roll no :{props.studentRollNo}</p>
    </div>
  )
}
