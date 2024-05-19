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
      name: "Avengers: End Game",
      link_img:
        "https://th.bing.com/th/id/OIP.Iz6fhsuI-mX-ixaR7HajxgHaKb?dpr=1.3&pid=ImgDetMain",
      link: "https://www.youtube.com/embed/rrGMENN1iaY",
      mota: "Biệt Đội Siêu Anh Hùng 4: Hồi Kết - Avengers: Endgame: Cú búng tay của Thanos đã khiến toàn bộ dân số biến mất một nửa. Các siêu anh hùng đánh mất bạn bè, người thân và đánh mất cả chính mình. Bộ sáu Avengers đầu tiên tứ tán. Iron Man kẹt lại ngoài không gian, Hawkeye mất tích. Thor, Captain America, Hulk và Black Widow đều chìm trong nỗi đau vô tận vì mất đi những người thân yêu. Họ phải làm gì để cứu vãn mọi chuyện ở Avengers: Hồi Kết? Điều khán giả quan tâm nhất hiện nay chính là ai sẽ còn sống và ai sẽ ra đi khi Avengers: Endgame kết thúc.",
      theloai: "Hành động",
    },
    {
      id: 2,
      name: "AQUAMAN và vương quốc thất lạc",
      link_img:
        "https://i.mpcdn.top/c/MYmMKqW/aquaman-va-vuong-quoc-that-lac.jpg?",
      link: "https://www.youtube.com/embed/keZ70jipjXc",
      mota: "Aquaman Và Vương Quốc Thất Lạc mở đầu khi David Kane (Yahya Abdul-Mateen II) lúc bấy giờ vô tình phát hiện ra cây đinh ba đen và bị ác linh của nó chiếm hữu và trở thành công cụ hồi sinh đội quân quái vật thời cổ đại. Lúc này Athur (Jason Momoa) lại đang bị choáng ngợp vì vừa phải trị vì Atlantic vừa phải làm cha bỉm sữa, anh nghi ngờ bản thân mình có đúng là vị vua thích hợp của 7 vương quốc hay không? Công cuộc trả thù của ‘Cá Đuối’ Kane không chỉ đem lại sự chết chóc cho Atlantic mà còn đe dọa đến sự tồn vong của Trái Đất, Athur phải cầu cứu sự giúp đỡ của em trai Orm (Patrick Wilson). Tất cả cùng nhau hợp sức để đánh bại được tên vua độc ác cùng đội quân ác quỷ nhằm bảo tồn được đại dương cùng mặt đất.",
      theloai: "Hành động",
    },
    {
      id: 3,
      name: "Triều ca",
      link_img: "https://i.mpcdn.top/poster/trieu-ca-6529.jpg?1555435621",
      link: "https://www.youtube.com/embed/-bde7BWAkgg",
      mota: "Triều Ca là bộ phim xoay quanh câu chuyện trong những năm của nhà Thương, Đế Ất dời đô đến Triều Ca, hy vọng nơi đây sẽ là một thành phố đầy phồn hoa. Thời gian trôi đi, ngôi vị Hoàng đế truyền tới Đế Tân, con người này có nhiều thành tựu lớn, nhưng lại chinh chiến khắp nơi làm cho dân chúng sống trong cảnh lầm than. May có con trai Cơ Xương ở Tây Kỳ là Cơ Khảo, cùng con trai đế Tân là Ân Giao đều là thiếu niên anh hùng, họ hy vọng có thể dùng thể lực mỏng manh của mình cứu dân chúng thoát khỏi cảnh dầu sôi lửa bỏng.",
      theloai: "Cổ trang",
    },
    {
      id: 4,
      name: "Pacific Rim",
      link_img:
        "https://th.bing.com/th/id/OIP.ZjUQhr7OBpchWvXwwv3xEwHaK8?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      link: "https://www.youtube.com/embed/dLptjP1RKmQ",
      mota: "Siêu đại chiến Thái Bình Dương: Bộ phim kể về cuộc chiến khốc liệt giữa loài người với những sinh vật khổng lồ được gọi là Kaiju trồi lên từ mặt biển phá moi thứ trên mặt đất cản đường chúng . Loài người chiến đấu quyết liệt để chống trả chúng. Cuộc chiến kéo dài nhiều năm lấy đi tính mạng bao nhiêu người. Các nhà Quân sự học đã chế ra một loại robot khồng lồ - Jeager, được điều khiển bởi 2 phi công, tâm trí họ được khóa tại 1 cầu nối thần kinh",
      theloai: "Viễn tưởng",
    },
    {
      id: 5,
      name: "FALLOUT",
      link_img: "https://i.mpcdn.top/c/EWyxnRE/fallout.jpg?1712835796     ",
      link: "https://www.youtube.com/embed/V-mugKDQDlg",
      mota: "Fallout kể về những thứ có và không có trong một thế giới mà hầu như không còn gì để có. 200 năm sau ngày tận thế, những cư dân hiền lành của những nơi trú ẩn bụi phóng xạ sang trọng buộc phải quay trở lại địa ngục bị chiếu xạ mà tổ tiên của họ để lại - và bị sốc khi khám phá ra một vũ trụ vô cùng phức tạp, vui vẻ kỳ lạ và cực kỳ bạo lực đang chờ đợi họ.",
      theloai: "Viễn tưởng",
    },
    {
      id: 6,
      name: "Quỷ thay đầu",
      link_img: "https://i.mpcdn.top/c/0RxYOZr/quy-thay-dau.jpg?1714224602",
      link: "https://www.youtube.com/embed/MUY7MIKOY-Q",
      mota: " Quỷ Thay Đầu kể về Phim theo chân Iris (Freya Allan), một cô gái trẻ bị người cha góa vợ (Peter Mullan) đối xử ghẻ lạnh. Sau khi ông qua đời, cô trở thành người thừa kế quán rượu xuống cấp đã tồn tại hàng thế kỷ ở Berlin. Bất ngờ xem được lời trăn trối của người cha qua đoạn băng video còn sót lại, Iris phát hiện một bí mật kinh hoàng về mụ ác quỷ 400 năm tuổi bị nhốt dưới tầng hầm với tên gọi Baghead. Khuôn mặt của bà ta được che giấu bởi một chiếc bao tải cũ, và có khả năng triệu hồi người chết bằng xương bằng thịt",
      theloai: "Kinh dị",
    },
    {
      id: 7,
      name: "Đấu phá thương khung",
      link_img:
        "https://i.mpcdn.top/poster/dau-pha-thuong-khung-phan-5-10493.jpg?1715494112     ",

      link: "https://www.youtube.com/embed/W81Dm6KubFc",
      mota: "Đấu Phá Thương Khung (Phần 5) kể về sau hẹn ước 3 năm, Tiêu Viêm cuối cùng cũng gặp được Huân Nhi ở học viện Già Nam, sau đó hắn kết giao nhiều bạn bè, thành lập Bàn Môn. Vì tiếp tục nâng cao thực lực để lên Vân Lam Tông lần 3 báo thù cho cha, hắn mạo hiểm đi vào Thiên Phần luyện Khí Tháp thôn phệ Vẫn Lạc Tâm Viêm...",
      theloai: "Hoạt hình",
    },
    {
      id: 8,
      name: "The Boogeyman",
      link_img: "https://i.mpcdn.top/c/VvV28p2/ong-ke.jpg?1693500122  ",
      link: "https://www.youtube.com/embed/Xhmv-UEesBo",
      mota: "Ông Kẹ kể về từ nguyên tác truyện ngắn của bậc thầy truyện kinh dị Stephen King, “Ông Kẹ” kể về câu chuyện của gia đình Harper khi một thực thể siêu nhiên bám theo và liên tục phá rối gia đình họ. Khi mà con quái vật này lấp ló trong bóng tối và chực chờ làm hại cô bé Sawyer như chực chờ một con mồi, chị gái Sadie và bố Will sẽ phải hành động để ngăn chặn điều này trước khi quá muộn.",
      theloai: "Kinh dị",
    },
    {
      id: 9,
      name: "The Fast and the Furious: Tokyo Drift",
      link_img:
        "https://i.mpcdn.top/poster/qua-nhanh-qua-nguy-hiem-3-duong-dua-tokyo-1270.jpg?1565726864 ",
      link: "https://www.youtube.com/embed/ubMXBEj6d7w",
      mota: "Quá Nhanh Quá Nguy Hiểm 3: Đường Đua Tokyo kể về Sean Boswell là một học sinh trung học cô độc ở Mỹ. Mối liên hệ duy nhất với thế giới bình thường quanh anh là những cuộc đua tốc độ trái phép. Chỉ khi được tự do trên đường đua, Sean mới thoát khỏi cuộc sống bế tắc của mình. Chính vì những lần đua xe ấy mà Sean trở thành đối tượng được các nhà chức trách địa phương chú ý. Để tránh phải vào nhà giam, anh được gửi ra nước ngoài sống với người cha đang phục vụ trong quân đội.",
      theloai: "Hành động",
    },
    {
      id: 10,
      name: "Five Nights at Freddy's",
      link_img:
        "https://i.mpcdn.top/c/RPbbNWl/nam-dem-kinh-hoang.jpg?1699017415",
      link: "https://www.youtube.com/embed/0VH9WCFV6XQ",
      mota: " Năm Đêm Kinh Hoàng kể về nhân viên bảo vệ Mike bắt đầu làm việc tại Freddy Fazbear's Pizza. Trong đêm làm việc đầu tiên, anh nhận ra mình sẽ không dễ gì vượt qua được ca đêm ở đây. Chẳng mấy chốc, anh sẽ vén màn sự thật đã xảy ra tại Freddy's.",
      theloai: "Kinh dị",
    },
    {
      id: 11,
      name: "Tân thần điêu đại hiệp",
      link_img:
        "https://i.mpcdn.top/poster/tan-than-dieu-dai-hiep-6426.jpg?1632385998",
      link: "https://www.youtube.com/embed/yE3qJTyTQCw",
      mota: "Tân Thần Điêu Đại Hiệp kể vào cuối thời Nam Tống, khi quân Mông Cổ đã lớn mạnh, tiêu diệt hầu hết châu Á, châu Âu, đang trực tiếp uy hiếp an nguy của Nam Tống. Câu chuyện xoay quanh tình yêu của hai nhân vật chính là Dương Quá và Tiểu Long Nữ giữa những cuộc chiến tang thương đẫm máu cả trên giang hồ lẫn chiến trường.",
      theloai: "Cổ trang",
    },
    {
      id: 12,
      name: "Detective Conan: Black Iron Submarine",
      link_img:
        "https://i.mpcdn.top/c/xjXBVOp/phim-dien-anh-tham-tu-lung-danh-conan-tau-ngam-sat-mau-den.jpg?1703697778",

      link: "https://www.youtube.com/embed/0rNpSmVmN2U",
      mota: "Phim Điện Ảnh Thám Tử Lừng Danh Conan: Tàu Ngầm Sắt Màu Đen lấy bối cảnh tại Pacific Buoy - một trụ sở hàng hải của Interpol có nhiệm vụ kết nối các camera an ninh trên toàn thế giới. Nhóm của Conan, theo lời mời của Sonoko, cũng đến đảo Hachijo để xem cá voi. Tại đây, Conan nhận được thông tin về một nhân viên Europol bị ám sát. Cùng với đó, tính mạng Haibara bị đe dọa, phải chăng thân phận của cô đã bị bại lộ trước Gin…",
      theloai: "Hoạt hình",
    },
    //...
  ];
  const [dsphim1, setdsphim1] = useState(dsphim);
  function loc(e) {
    const dstam = dsphim.filter((el) => {
      return el.theloai?.includes(e.target.value);
    });
    setdsphim1(dstam);
  }
  return (
    <div className="trangchu">
      {<Menu />}
      {<Phimnoibat />}

      <div className="chuaphimvaloc">
        <div className="nensang"></div>
        <div className="column1" style={{}}>
          {dsphim1.map((phim) => (
            <Link to={`/xemphim/${phim.id}`} state={{ phim }} id="link">
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
                <img
                  className="anhphim"
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
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Hoạt hình"}
              />
              Hoạt hình
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Hành động"}
              />
              Hành động
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={"Viễn tưởng"}
              />
              Viễn tưởng
            </li>
            <li>
              <input type="radio" name="loc" onClick={loc} value={"Cổ trang"} />
              Cổ trang
            </li>
            <li>
              <input type="radio" name="loc" onClick={loc} value={"Kinh dị"} />
              Kinh dị
            </li>
            <li>
              <input
                type="radio"
                name="loc"
                onClick={loc}
                value={""}
                defaultChecked
              />
              ALL
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Trangchinh;
