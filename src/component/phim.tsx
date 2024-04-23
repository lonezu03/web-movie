import { Route, Routes,Link } from "react-router-dom";
import Xemphim from "./xemphim";

const phim=()=>{
return(
<div>
<section id="section">
<div className="row">
<Routes>
    <Route path='/xemphim' element={<Xemphim/>}/>
</Routes> 
    <div className="column">
      <div className="card">
        <center><img src="https://thegioidienanh.vn/stores/news_dataimages/phuonght/012017/20/09/5848_image003.jpg" id="image" className="thumbnail"></img></center>
        <h3 id="title">Movie Title</h3>
        <Link to ="/xemphim">Tên phim</Link>
        
      </div>
    </div>
    
  </div> 
  
</section></div>)}
export default phim