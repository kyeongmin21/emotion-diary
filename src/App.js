import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RouteTest from 'components/RouteTest';

import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import Write from 'pages/Write';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App</h2>
        <RouteTest/>

        <Routes>
          <Route path="/"      element={<Home/>}  />
          <Route path="/write" element={<Write/>} />
          <Route path="/edit"  element={<Edit/>}  />
          <Route path="/diary" element={<Diary/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
