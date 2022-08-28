import {useState} from 'react';
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const headText = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;

  const inCreaseMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()))
  }
  const inDecreaseMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()))
  }

  return (
    <div className="Home">
      <MyHeader
        leftChild={ <MyButton text={"<"} onClick={inDecreaseMonth}/> }
        headText={ headText }
        rightChild={ <MyButton text={">"} onClick={inCreaseMonth}/> }
        />
    </div>
  );
};

export default Home;
