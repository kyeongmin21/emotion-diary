import {Link} from 'react-router-dom';

const RouteTest = () => {
  return (
    <div className="RouteTest">
      <div><Link to={"/"}>Home</Link></div>
      <div><Link to={"/write"}>Write</Link></div>
      <div><Link to={"/edit"}>Edit</Link></div>
      <div><Link to={"/diary"}>Diary</Link></div>
    </div>
  )
}

export default RouteTest;
