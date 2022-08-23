import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from "./components/MyButton";

function App() {
  // 이미지 설정
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <MyButton text={'버튼'}
                  onClick={() => alert('버튼클릭')}
                  type={'positive'}/>
        <MyButton text={'버튼'}
                  onClick={() => alert('버튼클릭')}
                  type={'negative'}/>
        <MyButton text={'버튼'}
                  onClick={() => alert('버튼클릭')}/>

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
