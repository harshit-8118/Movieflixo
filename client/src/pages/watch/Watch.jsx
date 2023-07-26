import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.state;
  return (
    <div className="watch">
      <Link to={"/"}>
        <div className="back">
          <ArrowBackOutlined /> Home
        </div>
      </Link>
      {movie && (
        <video className="video" src={movie.video} autoPlay progress controls />
      )}
    </div>
  );
};

export default Watch;
