import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, {useRef} from 'react';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import Write from 'pages/Write';
import {useReducer} from "react";

const reducer = (state, action) => {
  let newState = [];

  switch (action.type) {
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'DELETE': {
      newState = state.filter(item => item.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map(item => item.id !== action.data.id ? {...action.data} : item)
    }
    default :
      return state
  }

  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE', data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1
  }

  const onDelete = (targetId) => {
    dispatch({type: 'DELETE', targetId});
  }

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT', data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    })
  }


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onDelete, onEdit}}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/write" element={<Write/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/diary/:id" element={<Diary/>}/>
            <Route path="/diary" element={<Diary/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
