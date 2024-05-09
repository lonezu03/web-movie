import { Link } from "react-router-dom";
import "./trangchinh.css";
import Menu from "./menu";
import Phimnoibat from "./phimnoibat";
const trangchinh = () => {
  const dsphim = [
    {
      id: 1,
      name: "ten phim ne",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/782fEo5G3v8",
    },
    {
      id: 2,
      name: "ten phim ne",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/5FCcXCchXDk",
    },
    {
      id: 3,
      name: "Phong Thần tam bộ khúc",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/kDRpjqrJNnQ",
    },
    {
      id: 4,
      name: "Lật mặt 7: Một điều ước",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/d1ZHdosjNX8",
    },
    { id: 5, name: "KUNG FU PANDA 4", link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg", link: "https://www.youtube.com/embed/_inKs4eeHiI" },
    { id: 6, name: "Deadpool & Wolverine ", link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg", link: "https://www.youtube.com/embed/WXLunaC5nWk" },
    { id: 99, name: "Trường nguyệt tẫn minh", link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg", link: "https://www.youtube.com/embed/WXLunaC5nWk" }
    //...
  ];

  return (
    <div className="trangchu">
      {<Menu />}
      {<Phimnoibat/>}
      <div className="column1" style={{}}>
        {dsphim.map((phim) => (
          <Link to={`/xemphim/${phim.id}`}  state={{ phim }} id="link">
            <div
              key={phim.id}
              className="column15"
              // style={{
              //   backgroundImage: `url("${phim.link_img}")`,
              //   backgroundPosition: "center center",
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              // }}
            >
               <img className="column2"
                src={phim.link_img}
                id="image"
                alt="Movie Thumbnail"
              />
              <h5 id="title">{phim.name}</h5>
              <span></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default trangchinh;
