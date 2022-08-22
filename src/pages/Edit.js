import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  console.log(id);
  console.log(mode);

  return (
    <div className="Edit">
      <h2>Edit</h2>
      <button onClick={() => setSearchParams({who: 'min'})}>Query String 바꾸기</button>
    </div>
  )
}

export default Edit;
