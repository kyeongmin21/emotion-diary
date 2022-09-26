import {useNavigate, useParams} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  console.log(id);

  return (
    <div className="Edit">
      <h2>edit</h2>
    </div>
  )
}

export default Edit;
