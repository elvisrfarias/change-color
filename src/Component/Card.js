import React from 'react'

const Card = ({children}) => {
  return (
    <>
      <div className="container">
        <h2>Background color:
          <br />
          <span className="color">{children}</span>
        </h2>
      </div>
    </>
  )
}

export default Card
