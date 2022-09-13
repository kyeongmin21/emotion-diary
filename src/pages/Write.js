import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Write = () => {
  return (
    <div className="Write">
      <MyHeader headText={"새 일기쓰기"}
                leftChild={<MyButton text={"뒤로가기"} />} />
      <h2>Write</h2>
    </div>
  )
}

export default Write;
