import { useParams } from "react-router-dom";
import Menu from "./menu"
const Xemphim = () => {
  const dsphim = [
    {
      id: 1,
      name: "ten phim ne",
      link_img: "1",
      link: "https://www.youtube.com/embed/782fEo5G3v8",
    },
    {
      id: 2,
      name: "ten phim ne",
      link_img: "1",
      link: "https://www.youtube.com/embed/5FCcXCchXDk",
    },
    {
      id: 3,
      name: "Phong Thần tam bộ khúc",
      link_img: "1",
      link: "https://www.youtube.com/embed/kDRpjqrJNnQ",
    },
    {
      id: 4,
      name: "Lật mặt 7: Một điều ước",
      link_img: "1",
      link: "https://www.youtube.com/embed/d1ZHdosjNX8",
    },
    { id: 5, name: "KUNG FU PANDA 4", link_img: "1", link: "https://www.youtube.com/embed/_inKs4eeHiI" },
    { id: 6, name: "Deadpool & Wolverine ", link_img: "1", link: "https://www.youtube.com/embed/WXLunaC5nWk" },
    { id: 99, name: "Trường nguyệt tẫn minh", link_img: "1", link: "https://www.youtube.com/embed/WXLunaC5nWk" }
    //...
  ];
  const { id } = useParams();
  console.log(dsphim[Number(id) - 1]);
  return (
    <div className="xemphim">
      <Menu/>
      <div className="d-flex justify-content-center">
        <iframe
          width="835"
          height="462"
          src={dsphim[ Number(id) - 1].link}
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
