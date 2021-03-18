import React from 'react'

function Hit(props) {
  return (
    <div>
      <div>
        <span>Title: </span>
        {props.hit.node.title}
      </div>

      <div>
        <span>Price: </span>
        {props.hit.node.defaultProductVariant.price}
      </div>

      <div>
        <span>Grams: </span>
        {props.hit.node.defaultProductVariant.grams}
      </div>
    </div>
  )
}

export { Hit }
