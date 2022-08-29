import {useState, useContext, useEffect} from 'react';
import {DiaryStateContext} from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const headText = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  const inCreaseMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()))
  }
  const inDecreaseMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()))
  }

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      ).getTime();

      // 첫날과 마지막날 사이를 범위로 filtering 하면, 월을 알아 낼 수 있다!
      setData(diaryList.filter(item => firstDay <= item.date && item.date <= lastDay));
    }
  }, [diaryList, currentDate]);

  useEffect(() => {
    console.log(data)
  }, [data]);

  return (
    <div className="Home">
      <MyHeader
        leftChild={<MyButton text={"<"} onClick={inDecreaseMonth}/>}
        headText={headText}
        rightChild={<MyButton text={">"} onClick={inCreaseMonth}/>}
      />
    </div>
  );
};

export default Home;
