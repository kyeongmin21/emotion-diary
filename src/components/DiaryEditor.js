import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import MyHeader from "components/MyHeader";
import MyButton from "components/MyButton";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const DiaryEditor = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(getStringDate(new Date()));

  return (
    <div className="DiaryEditor">
      <MyHeader leftChild={<MyButton text={'뒤로가기'}
                                     onClick={() => navigate(-1)}/>}
                headText={'새 일기쓰기'} />

      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input className="input_date"
                   type="date"
                   value={date}
                   onChange={(e) => setDate(e.target.value)} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default DiaryEditor();
