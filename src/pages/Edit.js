import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');
  const queryStringChange = () => setSearchParams({mode: 'white'});
  const pageGoHome = () => navigate('/home');
  const pageBack = () => navigate(-1);

  console.log('Edit.js id : ', id);
  console.log('Edit.js mode : ', mode);

  return (
    <div className="Edit">
      <h2>edit</h2>
      <button onClick={queryStringChange}>QS 바꾸기</button>

      {/*  로그인안한 사람이 페이지 접근하려고 할 때 사용  */}
      <button onClick={pageGoHome}>홈으로 가기</button>
      <button onClick={pageBack}>뒤로가기</button>
    </div>
  )
}

export default Edit;
