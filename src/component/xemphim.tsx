import { useParams } from "react-router-dom";

const Xemphim = () => {
  const dsphim = [
    {
      id: 1,
      name: "ten phim ne",
      link_img: "1",
      link: "https://www.youtube.com/embed/782fEo5G3v8",
    },
    {
      id: 2,
      name: "ten phim ne",
      link_img: "1",
      link: "https://www.youtube.com/embed/5FCcXCchXDk",
    },
    { id: 3, name: "ten phim ne", link_img: "1", link: "1" },
    { id: 4, name: "ten phim ne", link_img: "1", link: "1" },
    { id: 5, name: "ten phim ne", link_img: "1", link: "1" },
    { id: 6, name: "ten phim ne", link_img: "1", link: "1" },
    //...
  ];
  const { id } = useParams();
  console.log(dsphim[id - 1]);
  return (
    <div>
      <h1>title phim</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            width="17%"
            style={{ height: "17%" }}
            src="https://png.pngtree.com/png-vector/20220723/ourlarge/pngtree-cat-gold-logo-png-image_6034268.png"
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
                Trang chủ <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tính năng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Giá cả
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#" aria-disabled="true">
                Đã vô hiệu hóa
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="topnav">
        {/* <a className="active" href="#">Movies Site</a> */}
        <div className="search-container">
          <form role="search" id="form">
            <input
              type="search"
              id="query"
              name="q"
              placeholder="Search.."
            ></input>
          </form>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <iframe
          width="835"
          height="462"
          src={dsphim[id - 1].link}
          title="Tiêu Dao - Hoắc Kiến Hoa Vietsub"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>{" "}
      </div>
      {/* <Comment/> */}
    </div>
  );
};

export default Xemphim;
