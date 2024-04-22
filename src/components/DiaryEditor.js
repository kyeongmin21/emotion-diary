import {useContext, useState, useRef, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";
import {DiaryDispatchContext} from "../App";
import EmotionItem from "./EmotionItem";
import {getStringDate} from "util/date";
import {emotionList} from 'util/emotion';


const DiaryEditor = ({isEdit, selectData}) => {
  const {onCreate, onDelete, onEdit} = useContext(DiaryDispatchContext);
  const contentRef = useRef();
  const navigate = useNavigate();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3); // 어떤 감정을 선택했는지 저장
  const [content, setContent] = useState('');

  const handleClickEmotion = (emotion) => setEmotion(emotion);
  const handleContent = (e) => setContent(e.target.value);
  const goHome = () => navigate('/', {replace: true});
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    if (window.confirm(isEdit ? "일기를 수정하시겠습니까?" : "새 일기를 등록하시겠습니까?")) {
      if (isEdit) onEdit(selectData.id, date, content, emotion);
      else onCreate(date, content, emotion);
    }
    navigate('/', {replace: true});
  }

    const handleDelete = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      onDelete(selectData.id);
      navigate('/', {replace: true});
    }
  }
  
  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(selectData.date))));
      setEmotion(selectData.emotion);
      setContent(selectData.content);
    }
  }, [isEdit, selectData])

  return (
    <div className="DiaryEditor">
      <MyHeader leftChild={<MyButton text={'뒤로가기'} onClick={() => navigate(-1)}/>}
                headText={isEdit ? '수정하기' :  '새 일기쓰기'} 
                rightChild={isEdit && <MyButton text={'삭제하기'} type={'negative'} onClick={handleDelete}/>}/>

      <div>
        <section>
          <h2>오늘은 언제인가요?</h2>
          <div className="input_box">
            <input className="input_date"
                   type="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)} />
          </div>
        </section>
        <section>
          <h2>오늘의 감정</h2>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map(item => (
              <EmotionItem key={item.id}
                           {...item}
                           onClick={handleClickEmotion}
                           isSelected={item.id === emotion}/>
            ))}
          </div>
        </section>
        <section>
          <h2>오늘의 일기</h2>
          <div className="input_box text_wrapper">
            <textarea ref={contentRef}
                      placeholder="오늘은 어땠나요?"
                      value={content}
                      onChange={handleContent}/>
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={'취소하기'} onClick={goHome} />
            <MyButton text={'저장하기'} onClick={handleSubmit} type={'positive'} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default DiaryEditor;
