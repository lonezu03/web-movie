import { Link } from "react-router-dom";



const phimnoibat = () => {
  const phim = 
  { id: 99,
    name: "Trường nguyệt tẫn minh",
  link_img: "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
  
  link: "https://www.youtube.com/embed/WXLunaC5nWk", mota:"Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn."
 }
    return (
      <div className="phimnoibat">
        <div>
        <div id="noibat">
        <video width="1500px"  autoPlay  muted loop id="vd">
          <source src="https://trailer.vieon.vn/Teaser_TruongNguyetTanMinhv3.mp4" type="video/mp4"/>
           
        </video>
        
        <div className="noidungpnb">
        <p>Trường nguyệt tẫn minh</p>
        <Link to={`/xemphim/${phim.id}`}  state={{ phim }} id="link">
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
  export default phimnoibat