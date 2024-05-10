
const gioithieuphim = (props) => {
    const {phim} = props
    return (
      <div className="gioithieuphim">
        <div>
        <button className="play-btn">
                            {/* <ion-icon name="play-circle-outline" role="img" class="md hydrated" aria-label="play circle outline"></ion-icon> */}
         <div className="my-component" style={{ backgroundImage: `url(${phim.link_img})` }}>
            {/* Nội dung của component con */}
        </div>
         <div className="icon-inner"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon s-ion-icon" viewBox="0 0 512 512"><title>Play Circle</title><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" stroke-miterlimit="10" className="ionicon-fill-none ionicon-stroke-width"></path><path d="M216.32 334.44l114.45-69.14a10.89 10.89 0 000-18.6l-114.45-69.14a10.78 10.78 0 00-16.32 9.31v138.26a10.78 10.78 0 0016.32 9.31z"></path></svg></div>
        </button>       
                        
            </div>
          
        <div>
        <p>New Episodes</p>
        <h3 id="title">{phim.name}</h3>        </div>
        <h5>{phim.mota}</h5>
        <div>
        
        </div>
      </div>
    );
  };
  export default gioithieuphim
  