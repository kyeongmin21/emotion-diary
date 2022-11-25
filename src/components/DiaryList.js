import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import MyButton from "components/MyButton";


const sortOptionList = [
  {value: 'latest', name: '최신순'},
  {value: 'oldest', name: '오래된순'},
]

const filterOptionsList = [
  {value: 'all', name: '전부다'},
  {value: 'good', name: '좋은 감정만'},
  {value: 'bad', name: '안좋은 감정만'},
]

const ControlMenu = ({value, onChange, optionList}) => {
  return (
    <select value={value}
            onChange={(e) => onChange(e.target.value)} >
      {optionList.map((item, idx) => (
        <option value={item.value} key={idx}>{item.name}</option>
      ))}
    </select>
  )
}

const DiaryList = ({diaryList}) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState('latest');
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    }
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }
    // 깊은 복사 : 원본 데이터는 놔두고 복사한다
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === 'all' ? copyList : copyList.filter(item => filterCallBack(item));
    return filteredList.sort(compare);
  }

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu value={sortType}
                       onChange={setSortType}
                       optionList={sortOptionList} />
          <ControlMenu value={filter}
                       onChange={setFilter}
                       optionList={filterOptionsList} />
        </div>
        <div className="right_col">
          <MyButton text={'새 일기쓰기'}
                    type={'positive'}
                    onClick={() => navigate('/new')} />
        </div>
      </div>

      <div>
        {getProcessedDiaryList().map(item => (
          <div key={item.id}>{item.content} / 감정 : {item.emotion}</div>
        ))}
      </div>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList
