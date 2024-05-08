import { Link } from "react-router-dom";



const phimnoibat = () => {
    return (
      <div className="footer">
        <div>
        <div id="noibat">
        <h1>Phim nổi bật</h1>
        <video width="1900px" height="" autoPlay  muted >
          <source src="https://trailer.vieon.vn/Teaser_TruongNguyetTanMinhv3.mp4" type="video/mp4"/>
           
        </video>
        <p>Trường nguyệt tẫn minh</p>
        <Link to={`/xemphim/${99}`}  id="link">
         
            
        <p><i className="vie vie-play-solid-rc"></i> Xem ngay</p>
          </Link>
      </div>

        </div>
  
        <div></div>
  
        <div></div>
      </div>
    );
  };
  export default phimnoibat