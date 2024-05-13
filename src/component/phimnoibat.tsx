import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';


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
  const dsphimngan = [
    {
      id: 98,
      name: "Bầu trời rực đỏ",
      link_img:
        "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",

      link: "https://trailer.vieon.vn/Teaser_BauTroiRucDo.mp4",
      mota: "Quỷ Vương trùng sinh vào Ha Ram. Nữ thần sinh mệnh lấy đi đôi mắt của cậu để nhường người sẽ giải cứu thế giới. Thiên mệnh 2 đứa trẻ bắt đầu.",
    },
    {
      

      id: 99,
      name: "Trường nguyệt tẫn minh",
      link_img:
        "https://images.fpt.shop/unsafe/filters:quality(5)/fptshop.com.vn/uploads/images/tin-tuc/176627/Originals/poster-phim-hoat-hinh-1.jpg",

      link: "https://trailer.vieon.vn/Teaser_TruongNguyetTanMinhv3.mp4",
      mota: "Để cứu lấy chúng sinh, con gái tông chưởng môn quay ngược về quá khứ để ngăn cản tên ma thần trước khi hắn bị tà cốt trong người xâm chiếm hoàn toàn.",
    }
   
  ];
  const phim = dsphim[0];
  const [phimngan, setPhimngan] = useState(dsphimngan[0]);

  //console.log(phim);
function next()
{
  
  let tam
 for (let i = 0;i<dsphimngan.length;i++)
  {
    if(dsphimngan[i].id==phimngan.id+1)
      tam=dsphimngan[i];
  }
  console.log(tam)

  if(tam!=null)
{

  setPhimngan(tam);
  console.log('da set')
} 
  else
    setPhimngan(dsphimngan[0])
  
}
function back()
{   let tam
  for (let i = 0;i<dsphimngan.length;i++)
   {
     if(dsphimngan[i].id==phimngan.id-1)
       tam=dsphimngan[i];
   }
   console.log(tam)
 
   if(tam!=null)
     setPhimngan(tam);
   else
     setPhimngan(dsphimngan[dsphimngan.length])

}
  return (
    <div className="phimnoibat">
      <div>
        <div id="noibat">
          <video width="1500px" autoPlay muted  id="vd">
            <source
              src={phimngan.link}
              type="video/mp4"
            />
            
          </video>

          <div className="noidungpnb">
            <p id="tenphim">{phimngan.name}</p>
            <Link to={`/xemphim/${phimngan.id}`} state={{ phim }} id="link">
              Watch now
            </Link>
            <p>{phimngan.mota}</p>
          </div>
          <div id="iconnext">
          <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" onClick={back}/>
          <FontAwesomeIcon icon={faCircleChevronRight}size="3x" onClick={next}/>
          
    </div>
            </div>
      </div>

      <div></div>
    </div>
  );
};
export default Phimnoibat;
