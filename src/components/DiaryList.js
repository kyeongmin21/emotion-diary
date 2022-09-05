import {useState} from "react";

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된 순"},
]

const filterOptionList = [
  {value: "all", name: "전부다"},
  {value: "good", name: "좋은 감정만"},
  {value: "bad", name: "안좋은 감정만"},
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
  const [filter, setFilter] = useState('all');

  const getProcessedDiaryList = () => {

    const filterCallBack = (item) => {
      if (filter === 'good') {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    }

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
    const filteredList = filter === 'all' ? copyList : copyList.filter((item) => filterCallBack(item));
    const sortedList = filteredList.sort(compare);
    return sortedList;
  }

  return (
    <div className="DiaryList">
      <ControlMenu value={sortType}
                   onChange={setSortType}
                   optionList={sortOptionList}/>
      <ControlMenu value={filter}
                   onChange={setFilter}
                   optionList={filterOptionList}/>
      {getProcessedDiaryList().map((item) => (
        <div key={item.id}>{item.content} {item.emotion}</div>
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: []
};

export default DiaryList
