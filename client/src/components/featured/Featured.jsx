import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";

const Featured = ({type}) => {
  return (
    <div className="featured">
        {
            type && (
                <div className="category">
                    <span>{ type === 'movie' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )
        }
      <img
        src="https://images.unsplash.com/photo-1602562086757-78809c34ceb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RyYW5nZXIlMjB0aGluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        alt=""
      />
      <div className="info">
        <img
          src="https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          alt=""
          className="bgimg"
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          deserunt, voluptate architecto id ipsam praesentium molestias
          recusandae ex. Explicabo labore ipsum nam dignissimos facilis officiis
          maiores voluptatum cupiditate veniam eum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
