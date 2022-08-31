import {useState} from "react";

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된 순"},
]

const ControlMenu = ({value, onChange, optionList}) => {
  return (
    <select value={value}
            onChange={(e) => onChange(e.target.value)}>
      {optionList.map((item, idx) => <option value={item.value} key={idx}>{item.name}</option>)}
    </select>
  )
}

const DiaryList = ({diaryList}) => {
  // 정렬기준을 저장할 state
  const [sortType, setSortType] = useState('latest');

  const getProcessedDiaryList = () => {

    // 객체로 이루어진 배열 : [ {}, {}, {} ]
    // 그냥 정렬하면 정렬이 안됨. 그래서 비교함수를 만들어 줘야함
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }
    const copyList = JSON.parse(JSON.stringify(diaryList));
    return copyList.sort(compare);
  }

  return (
    <div className="DiaryList">
      <ControlMenu value={sortType}
                   onChange={setSortType}
                   optionList={sortOptionList}/>
      {getProcessedDiaryList().map((item) => (
        <div key={item.id}>
          {item.content}
        </div>
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList
