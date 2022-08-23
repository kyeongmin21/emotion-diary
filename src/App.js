import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  // 이미지 설정
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="이미지1"/>
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt="이미지2"/>
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt="이미지3"/>
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt="이미지4"/>
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt="이미지5"/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary' element={<Diary/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
