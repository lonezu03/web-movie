function gioithieuphim (props) {
  //const {id,name,link_img,mota } = props;
  const phim=props.data
  
  console.log (props.data)
  console.log(phim)
  return (
    <div className="gioithieuphim">
      <div>
        <button>
          <div  id="anh">
          <img src={phim.link_img} alt="" />
          </div>
        </button>
      </div>
      <div id="chuacontentvabovochoday">
      <div id="content">
        <p>New Episodes</p>
        <h3 id="title">{phim.name}</h3>{" "}
        <h5>{phim.mota}</h5>

      </div>
      <div id="bovochoday">
      <img src="https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-share-icon-design-vector-png-image_1588358.jpg" alt="" />
      <div>
        <h2>Prime Video</h2>
        <p>Streaming Channels</p>
      </div>
      <button>WATCH NOW</button>
      </div>
      </div>
    </div>
  )
}
export default gioithieuphim;
