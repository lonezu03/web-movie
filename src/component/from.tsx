
function from() {

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="emaail" className="form-control form-control-action" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

 export default from