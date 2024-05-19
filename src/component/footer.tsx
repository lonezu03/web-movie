//import { FontAwesomeIcon } from '../../node_modules/@fortawesome/fontawesome-free'


//import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'
const footer = () => {
  return (
    <div className="footer">
      <div style={{margin:'10px'}}> 
        <p> Contact us :</p>
        <ul className="LienHe">
            <li> <i className="fa-solid fa-envelope"></i> phanthanhvu8548@gmail.com</li>
            <li> <i className="fa-solid fa-phone"></i> lonezu03@gmail.com </li>
            <li> <i className="fa-solid fa-envelope"></i> dannytang540@gmail.com</li>
            <li> <i className="fa-solid fa-phone"></i> 0386165820</li>
        </ul>
      </div>

      <div style={{paddingLeft:'100px'}}>       
        <ul className="lh">
          <p> <i className="fa-solid fa-map-location"></i> 180 Cao Lỗ , Phường 4, Quận 8, TP. Hồ Chí Minh</p>
        </ul>
      </div>

      <div style={{paddingLeft:'150px'}}>
        <ul>
          <h1> Filmlane </h1>
          <i className  ="fa-brands fa-facebook fa-2xl"></i>
          <li> </li>
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </ul>
      </div>
    </div>
  );
};
export default footer
