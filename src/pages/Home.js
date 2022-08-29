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
    console.log('1', new Date(firstDay))
    console.log('2', new Date(lastDay))
  }, [currentDate]);


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
