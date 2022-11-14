import {useParams} from 'react-router-dom';

const Diary = () => {
  const {id} = useParams();
  console.log('Diary.js id : ', id);

  return (
    <div className="Diary">
      <h2>Diary</h2>
    </div>
  )
}

export default Diary;
