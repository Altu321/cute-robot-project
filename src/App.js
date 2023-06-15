 import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreenOne from './component/Screen1/ScreenOne';
import ScreenTwo from './component/Screen2/ScreenTwo';
import ScreenThree from './component/Screen3/ScreenThree';
import ScreenFour from './component/Screen4/ScreenFour';

function App() {
  return (
    <BrowserRouter>
    <div className='Main-container'>
    <Routes>
      
      <Route path='/' element={<ScreenOne/>}/>
      <Route path='/ScreenTwo' element={<ScreenTwo/>}/>
      <Route path='/ScreenThree' element={<ScreenThree/>}/>
      <Route path= '/ScreenFour' element={<ScreenFour/>}/>
      
      
    </Routes>
    </div>
    </BrowserRouter>

    
  );
}

export default App;
