import React from 'react'
import Header from '../Component/Header'
import Card from '../Component/Card'

const Hexa = () => {
  const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  const [color , setColor] = React.useState('...')

  const handleClick = () => {
    let hexaColor = "#";
    for (let i = 0; i < 6; i++) {
        hexaColor += hexa[randomNumber()];
      }
      document.body.style.backgroundColor = hexaColor;  
      setColor(hexaColor);
  }

  function randomNumber() {
    return Math.floor(Math.random() * hexa.length);
  }

  return (
    <div>
      <Header/>
      <main>
        <Card>{color}</Card>
        <button className="btn btn-hero" id="btn" onClick={handleClick}>CLICK HERE</button>
      </main>
    </div>
  )
}

export default Hexa;
