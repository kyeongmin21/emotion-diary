import {useState} from "react";

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된 순"},
]

const ControlMenu = ({value, onChange, optionList}) => {
  return <select value={value}
                 onChange={(e) => e.target.value}>
    {optionList.map((item, idx) => <option value={item.value} key={idx}>{item.name}</option>)}
  </select>
}

const DiaryList = ({diaryList}) => {
  // 정렬기준을 저장할 state
  const [sortType, setSortType] = useState('latest');
  return (
    <div className="DiaryList">
      <ControlMenu value={sortType}
                   onChange={setSortType}
                   optionList={sortOptionList}/>
      {diaryList.map((item) =>  (
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
