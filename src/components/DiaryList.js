import {useState} from "react";

const sortDayList = [
  {value: 'latest', name: '최신순'},
  {value: 'oldest', name: '오래된순'},
]

const ControlMenu = ({value, onChange, optionList}) => {
  return (
    <div>
      <select value={value}
              onChange={(e) => onChange(e.target.value)} >
        {optionList.map((item, idx) => (
          <option value={item.value} key={idx}>{item.name}</option>
        ))}
      </select>
    </div>
  )
}


const DiaryList = ({diaryList}) => {

  const [sortType, setSortType] = useState('latest');
  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }
    // 깊은 복사 : 원본 데이터는 놔두고 복사한다
    const copyList = JSON.parse(JSON.stringify(diaryList));
    return copyList.sort(compare);
  }

  return (
    <div className="DiaryList">
      <ControlMenu value={sortType}
                   onChange={setSortType}
                   optionList={sortDayList}/>

      {getProcessedDiaryList().map(item => (
        <div key={item.id}>{item.content} / 감정: {item.emotion}</div>
      ) )}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList
