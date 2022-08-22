import {useSearchParams, useNavigate} from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  const navigate = useNavigate();

  return (
    <div className="Edit">
      <h2>Edit</h2>
      <button onClick={() => setSearchParams({who: 'min', color: 'black'})}>Query String 바꾸기</button>
      <button onClick={() => navigate("/")}> Home 이동 버튼</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default Edit;
