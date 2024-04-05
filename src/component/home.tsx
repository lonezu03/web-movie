import React, { useState } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const nopClick = () => {};

  return (
    <div id="home">
      <img
        id="home-bg"
        width="10%"
        height="10%"
        src="https://png.pngtree.com/png-vector/20220723/ourlarge/pngtree-cat-gold-logo-png-image_6034268.png"
        alt=""
      />

      <button
        onClick={handleClick}
        className="btn btn-primary btn-block btn-color-red"
        id="btn-dn"
      >
        đăng nhập
      </button>
      {showForm && (
        <div id="form-dn">
          <form>
            <div className="mb-3" id="f">
              <label className="form-label">Email address</label>
              <input
                type="emaail"
                className="form-control form-control-action"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      )}
      <div id="bd">
        <p>phút giây giải trí gắn kết gia đình</p>
        <p>Đăng nhập để có những phút giây giải trí </p>
      </div>
    </div>
  );
};

export default Home;
