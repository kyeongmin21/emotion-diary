const MyButton = ({text, onClick, type}) => {
  // type 이 포함되어 있는지 보고, 컬러 매칭
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button className={['MyButton', `MyButton_${btnType}`].join(' ')}
            onClick={onClick}>{text}</button>
  )
};

MyButton.defaultProps = {
  type: 'default'
}

export default MyButton;
