import {useContext, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {DiaryStateContext} from "../App";

const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const diaryList = useContext(DiaryStateContext)
  console.log(id);
  console.log(diaryList);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (item) => parseInt(item.id) === parseInt(id)
      );
      console.log(targetDiary);
      if (targetDiary) {

      } else {
        navigate("/", {replace: true });
      }
    }
  }, [id, diaryList]);
  // id와 다이어리 리스트가 바뀔 때 데이터를 가져옴

  return (
    <div className="Edit">
      <h2>edit</h2>
    </div>
  )
}

export default Edit;
