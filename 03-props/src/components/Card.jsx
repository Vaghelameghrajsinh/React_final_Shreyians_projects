import React from 'react'

const Card = (props) => {

    console.log(props.img);
  return (
    
       <div className="card">

        <img src={props.img} alt="No img found" />
        <h1>{props.user} , {props.age}  </h1>
      
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ducimus!</p>
        <button>Profile</button>
      </div>
      
   
  )
}

export default Card
