const DiaryItem = ({id, emotion, content, date}) => {
  const strDate = new Date(parseInt(date)).toLocaleDateString();

  return (
    <div className="DiaryItem">
      <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(' ')}>
        <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}  alt="감정이미지"/>
      </div>
      <div className="info_wrapper">
        <div className="diary_date">{ strDate }</div>
        <div className="diary_content_preview">{content.slice(0,20)}</div>
      </div>
    </div>
  )
};

export default DiaryItem;
