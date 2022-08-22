import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/diary' element={<Diary/>}/>
          <Route path='/diary/:id' element={<Diary/>}/>
        </Routes>
        <RouteTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
