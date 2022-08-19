import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
