import React from 'react'

const SingleCandy = (props) => {
  return (
    <div>
      <h1>{props.candy.name}</h1>
      <h2>{props.candy.description}</h2>
      <img src={props.candy.imgUrl} />
    </div>
  )
}

export default SingleCandy
