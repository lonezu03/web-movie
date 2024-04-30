import {  Link } from "react-router-dom";


const trangchinh = () => {
  const dsphim = [
    { id: 1, name: "ten phim ne", link_img: "1" },
    { id: 2, name: "ten phim ne", link_img: "1" },
    { id: 3, name: "ten phim ne", link_img: "1"  },
    { id: 4, name: "ten phim ne", link_img: "1"  },
    { id: 5, name: "ten phim ne", link_img: "1" },
    { id: 6, name: "ten phim ne", link_img: "1"  },
    //...
  ];

  return (
    <div>
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

      {dsphim.map((phim) => (
        <div key={phim.id} className="column">
          <div className="card">
            <center>
              <img
                src={phim.link_img}
                id="image"
                className="thumbnail"
                alt="Movie Thumbnail"
              />
            </center>
            <h3 id="title">{phim.name}</h3>
            <Link to={`/xemphim/${phim.id}`}>Xem phim</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default trangchinh;
