import {useNavigate} from "react-router-dom";
import {useState} from "react";

import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import EmotionItem from "./EmotionItem"

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
  {emotion_id: 1, emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`, emotion_description: '완전 좋음'},
  {emotion_id: 2, emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`, emotion_description: '좋음'},
  {emotion_id: 3, emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`, emotion_description: '그럭 저럭'},
  {emotion_id: 4, emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`, emotion_description: '나쁨'},
  {emotion_id: 5, emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`, emotion_description: '끔찍함'},
]

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const DiaryEditor = () => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();

  const [emotion, setEmotion] = useState(3);
  const handleClickEmote = () => {
    setEmotion(emotion);
  }

  return (
    <div className="DiaryEditor">
      <MyHeader headText={"새 일기쓰기"}
                leftChild={<MyButton text={"< 뒤로가기"}
                                     onClick={() => navigate(-1)}/>}
      />
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input className="input_date"
                   type="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)}/>
          </div>
        </section>
        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map(item => (
              // <div key={item.emotion_id}>{item.emotion_description}</div>
              <EmotionItem
                key={item.emotion_id} 웃
                {...item}
                onClick={handleClickEmote}/>
            ))}
          </div>
        </section>
      </div>

    </div>
  )
}

export default DiaryEditor;
