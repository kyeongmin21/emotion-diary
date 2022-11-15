import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import Write from 'pages/Write';
import MyButton from "components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader leftChild={<MyButton text={'왼쪽 버튼'}
                                       onClick={() => alert('왼쪽 클릭')}/>}
                  headText={'App'}
                  rightChild={<MyButton text={'오른쪽 버튼'}
                                        onClick={() => alert('오른쪽 클릭')}/>} />

        <MyButton text={'버튼'}
                  onClick={() => alert('버튼')}
                  type={"positive"} />
        <MyButton text={'버튼'}
                  onClick={() => alert('버튼')}
                  type={"negative"} />
        <MyButton text={'버튼'}
                  onClick={() => alert('버튼')} />

        <Routes>
          <Route path="/"      element={<Home/>}  />
          <Route path="/write" element={<Write/>} />
          <Route path="/edit"  element={<Edit/>}  />
          <Route path="/diary/:id" element={<Diary/>} />
          <Route path="/diary" element={<Diary/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
