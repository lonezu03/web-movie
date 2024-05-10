
import { Link } from "react-router-dom";

function menuH  ()  {
    return(
<div className="menu">
<div className="menuall">
<nav className="navbar navbar-expand-lg navbar-light  menu">
  <a className="navbar-brand" href="#">
    <img
      width="17%"
      style={{ height: "17%" }}
      src="https://movie-detail-drab.vercel.app/assets/images/logo.svg"
      alt=""
    />
  </a>
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
        <Link to={`/trangchu`}>  Trang chủ </Link>
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
        <a className="nav-link " href="#" >
          nổi bật
        </a>
      </li>
    </ul>
  </div>
</nav>

  </div>
  </div>
  )
  }
  export default menuH
