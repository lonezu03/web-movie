import { Link } from "react-router-dom";
import "./trangchinh.css";
import Menu from "./menu";
import Phimnoibat from "./phimnoibat";
import Footer from "./footer";
import { useState } from "react";
const Trangchinh = () => {
 // const location = useLocation(); // Lấy data được truyền qua state
 // const user = location.state?.loai;
 
  const dsphim = [
    {
      id: 1,
      name: "ten phim ne",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/782fEo5G3v8",mota:"phim nay hay cuc",
      theloai:"viễn tưởng"
    },
    {
      id: 2,
      name: "ten phim ne",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/5FCcXCchXDk",mota:"phim nay hay cuc",
      theloai:"viễn tưởng"
    },
    {
      id: 3,
      name: "Phong Thần tam bộ khúc",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/kDRpjqrJNnQ",mota:"phim nay hay cuc",
      theloai:"viễn tưởng"
    },
    {
      id: 4,
      name: "Lật mặt 7: Một điều ước",
      link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/d1ZHdosjNX8",mota:"phim nay hay cuc",
      theloai:"viễn tưởng"
    },
    { id: 5, 
      name: "KUNG FU PANDA 4",
     link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
      link: "https://www.youtube.com/embed/_inKs4eeHiI", mota:"phim nay hay cuc",
      theloai:"viễn tưởng"
    },
    { id: 6,
       name: "Deadpool & Wolverine ", 
    link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
     link: "https://www.youtube.com/embed/WXLunaC5nWk", mota:"phim nay hay cuc",
      theloai:"Hoạt Hình"
    },
    { id: 99,
       name: "Trường nguyệt tẫn minh",
     link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",

     link: "https://www.youtube.com/embed/5XPaB6Gu9XY",
      mota:"Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn."
    ,
      theloai:"Hoạt Hình"
    }
    //...
  ];
const [dsphim1,setdsphim1]=useState(dsphim)
function loc(e){
  const dstam=dsphim.filter((el)=>{
     return el.theloai?.includes(e.target.value)
    })
    setdsphim1(dstam);
}
  return (
    <div className="trangchu">
      {<Menu />}
      {<Phimnoibat/>}


      <div className="chuaphimvaloc">
        <div className="nensang"></div>
      <div className="column1" style={{}}>
        {dsphim1.map((phim) => (
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
               <img className="anhphim"
                src={phim.link_img}
                id="image"
                alt="Movie Thumbnail"
              />
              <h5 id="title">{phim.name}</h5>
              <span>{phim.theloai}</span>
            </div>
          </Link>
        ))}
      

      </div>
      <div className="loc">

        <ul className="ulloc">
          <span>Thể loại phim</span>
          <li><input type="radio" name="loc" onClick={loc} value={'Hoạt Hình'}/>Hoạt Hình</li>
        <li><input type="radio" name="loc"onClick={loc}value={'Hành Động'}/>Hành Động</li>
        <li><input type="radio" name="loc"onClick={loc}value={'Viễn tưởng'}/>Viễn Tưởng</li>
        <li><input type="radio" name="loc"onClick={loc}value={'Cổ Trang'}/>Cổ Trang</li>
        <li><input type="radio" name="loc"onClick={loc}value={''} defaultChecked/>ALL</li>
        
        </ul>
      </div>
      </div>
        <Footer/>

    </div>
  );
};

export default Trangchinh;
