import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Css/App.css';
import Home from './Pages/Home';
import Rgb from './Pages/Rgb';
import Hexa from './Pages/Hexa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/hexa" element={<Hexa/>}/>
          <Route path="/rgb" element={<Rgb/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
