import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt="muzzz" />
        <div className="name">{props.name}, {props.age}</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Veiw Profile</button>
    </div>
  )
}

export default Card