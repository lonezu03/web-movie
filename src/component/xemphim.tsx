import { useLocation } from "react-router-dom";
import Menu from "./menu";
import Gioithieuphim from "./gioithieuphim";
const Xemphim = () => {
  const location = useLocation(); // Lấy data được truyền qua state
  const phim = location.state?.phim;
  console.log(phim.id);
  
  return (
    <div className="xemphim">
      <Menu />
      <Gioithieuphim data={phim.name} />
      <div className="d-flex justify-content-center">
        <iframe
          width="835"
          height="462"
          src={phim.link}
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
