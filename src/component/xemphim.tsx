import React from "react";
//import Comment from './coment'
const xemphim = () => {
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
          src="https://www.youtube.com/embed/782fEo5G3v8"
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

export default xemphim;
