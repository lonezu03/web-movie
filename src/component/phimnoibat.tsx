import { Link } from "react-router-dom";



const phimnoibat = () => {
  const phim = 
    {
      id: 99,
      name: "Trường nguyệt tẫn minh",
      link_img:
        "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",
        link:"https://www.youtube.com/embed/HRtuwq0B6Pk"
    }
    return (
      <div className="phimnoibat">
        <div>
        <div id="noibat">
        <h1>Phim nổi bật</h1>
        <video width="1500px" height="" autoPlay  muted loop>
          <source src="https://trailer.vieon.vn/Teaser_TruongNguyetTanMinhv3.mp4" type="video/mp4"/>
           
        </video>
        <p>Trường nguyệt tẫn minh</p>
        <Link to={`/xemphim/${phim.id}`}  state={{ phim }} id="link">
         
            
        <span>Watch now</span>
          </Link>
      </div>

        </div>
  
        <div></div>
  
        <div></div>
      </div>
    );
  };
  export default phimnoibat