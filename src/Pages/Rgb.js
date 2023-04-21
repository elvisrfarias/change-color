import React from 'react'
import Header from '../Component/Header';
import Card from '../Component/Card'

const Rgb = () => {
  const [color, setColor] = React.useState("...")

  const handleClick = () => {
      let r = parseInt(Math.random() * 255);
      let g = parseInt(Math.random() * 255);
      let b = parseInt(Math.random() * 255);
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      setColor(`rgb(${r}, ${g}, ${b})`)
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

export default Rgb;
