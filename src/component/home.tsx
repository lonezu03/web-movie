import React from "react";

const home=() =>{

    return(
       <div id="home">
        <img id="home-bg" width="100%" height="100%" src="https://www.elle.vn/wp-content/uploads/2020/11/18/402138/phim-marvel-ra-mat-trong-2-nam-toi.jpg" alt="" />
            <p>phút giây giải trí gắn kết gia đình
            </p>
            <button>đăng nhập</button>
            <div>
        <form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="emaail" className="form-control form-control-action" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
       </div>
    )
}

 export default home