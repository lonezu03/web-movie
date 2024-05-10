import { Link } from "react-router-dom";

const menu = () => {
  return (
    <div className="menu">
      <div className="menuall">
        <nav className="navbar navbar-expand color-white   menu">
          <Link to={"/trangchu"}>
            <img id="logo"
              src="https://movie-detail-drab.vercel.app/assets/images/logo.svg"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <Link to={`/trangchu`}> Trang chủ </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Liên hệ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  nổi bật
                </a>
              </li>
            </ul>
          </div>

        </nav>

        <div><p>user: {window.tenTK}</p></div>
        {/* <div className="search-container ">
          <form role="search" id="form">
            <input
              type="search"
              id="query"
              name="q"
              placeholder="Search.."
            ></input>
          </form>
        </div> */}
      </div>
    </div>
  );
};
export default menu;
