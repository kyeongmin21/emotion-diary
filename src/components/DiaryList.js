const DiaryList = ({diaryList}) => {
  return (
    <div className="DiaryList">
      {diaryList.map(item => (
        <div key={item.id}>{item.content} </div>
      ) )}
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList
