import React, {useRef, useReducer, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import Diary from 'pages/Diary';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import Write from 'pages/Write';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      return [action.data, ...state];
    }
    case 'DELETE': {
      return state.filter(item => item.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map(item => item.id === action.data.id ? {...action.data} : item)
    }
    default :
      return state
  }
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  { id: 1, emotion: 1, content: '오늘일기1', date: 1669200621033 },
  { id: 2, emotion: 2, content: '오늘일기2', date: 1669200621034 },
  { id: 3, emotion: 3, content: '오늘일기3', date: 1669200621035 },
  { id: 4, emotion: 4, content: '오늘일기4', date: 1669200621036 },
  { id: 5, emotion: 5, content: '오늘일기5', date: 1669200621037 },
  { id: 6, emotion: 3, content: '12월일기1', date: 1670246708910 },
  { id: 7, emotion: 2, content: '12월일기2', date: 1670246708911 },
]


function App() {

  useEffect(() => {
    localStorage.setItem('jin', 31);
    localStorage.setItem('min', '31');
    // 객체로 넣으면 [object object] 로 출력되므로, 문자열 형태로 바꿔서 넣어줘야 한다.
    localStorage.setItem('gi', JSON.stringify({ value: 30 }));

    const jin = localStorage.getItem('jin')
    const min = localStorage.getItem('min')
    const obj = JSON.parse(localStorage.getItem('gi')) // 객체로 꺼내오기
    // {jin: '31', min: '31'} 객체로 출력된다.
    // console.log({jin, min, obj})
    console.log(jin, min, obj)
  }, []);


  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(8);

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
              <Route path="/edit/:id" element={<Edit/>}/>
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
