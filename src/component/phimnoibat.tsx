import { Link } from "react-router-dom";
import { useState } from "react";

const Phimnoibat = () => {
  const dsphim = [
    {
      id: 99,
      name: "Trường nguyệt tẫn minh",
      link_img:
        "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",

      link: "https://www.youtube.com/embed/5XPaB6Gu9XY",
      mota: "Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn.",
    },
    {
      id: 99,
      name: "Trường nguyệt tẫn minh 2",
      link_img:
        "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",

      link: "https://www.youtube.com/embed/5XPaB6Gu9XY",
      mota: "Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn.",
    },
  ];
  //const [phim, setPhim] = useState(dsphim[0]);
  //console.log(phim)

  const phim = {
    id: 99,
    name: "Trường nguyệt tẫn minh",
    link_img:
      "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",

    link: "https://www.youtube.com/embed/5XPaB6Gu9XY",
    mota: "Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn.",
  };

  return (
    <div className="phimnoibat">
      <div>
        <div id="noibat">
          <video width="1500px" autoPlay muted loop id="vd">
            <source
              src="https://trailer.vieon.vn/Teaser_TruongNguyetTanMinhv3.mp4"
              type="video/mp4"
            />
          </video>

          <div className="noidungpnb">
            <p id="tenphim">{phim.name}</p>
            <Link to={`/xemphim/${phim.id}`} state={{ phim }} id="link">
              Watch now
            </Link>
            <p>{phim.mota}</p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};
export default Phimnoibat;
