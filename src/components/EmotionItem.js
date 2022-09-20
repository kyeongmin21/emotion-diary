const EmotionItem = ({emotion_id, emotion_img, emotion_description, onClick}) => {
  return (
    <div className="EmotionItem" onClick={() => onClick(emotion_id)}>
      <img src={emotion_img} alt="감정이미지"/>
      <span>{emotion_description}</span>
    </div>
  )
}

export default EmotionItem;
