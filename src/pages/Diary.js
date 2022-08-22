import {useParams} from 'react-router-dom';

const Diary = () => {
  const {id} = useParams();

  return (
    <div className="Diary">
      <h2>Diary</h2>
      <p>이 페이지는 Path Variable를 사용했습니다.</p>
    </div>
  )
}

export default Diary;
