
import React from 'react'
import Header from '../Component/Header'
import Card from '../Component/Card'
import DataColor from '../Data.js'
const Home = () => {
  const [color, setColor] = React.useState("...")

  const handleClick = () =>{
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = DataColor[randomNumber];
    setColor(DataColor.textContent = DataColor[randomNumber]);
  }
  
  const getRandomNumber = () => {
    return Math.floor(Math.random() * DataColor.length);
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

export default Home;
