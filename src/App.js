import {useReducer} from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/Home';
import Write from './pages/Write';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE' : {
      const newItem = {
        ...action.data
      }
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((item) => item.id !== action.targetId)
      break;
    }
    case 'EDIT' : {
      newState = state.map((item) => item.id === action.data.id ? {...action.data} : item);
      break;
    }
    default :
      return state
  }
  return newState;
}

function App() {
  const [data, dispatch] = useReducer(reducer, [])

  return (
    <BrowserRouter>
      <div className="App">
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
