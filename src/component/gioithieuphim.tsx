function gioithieuphim (props) {
  const {id,name,link_img,link,mota  } = props;
  const {phim}=props
  //alert(id+link);
  return (
    <div className="gioithieuphim">
      <div>
        <button>
          <div style={{ backgroundImage: `url(${phim.link_img})` }}>
            {/* Nội dung của component con */}
          </div>
        </button>
      </div>

      <div>
        <p>New Episodes</p>
        <h3 id="title">{phim.name}</h3>{" "}
      </div>
      <h5>{phim.mota}</h5>
      <div></div>
    </div>
  )
}
export default gioithieuphim;
