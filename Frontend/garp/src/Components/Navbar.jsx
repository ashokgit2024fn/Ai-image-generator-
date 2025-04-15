import Button from 'react-bootstrap/Button';
import './Navbar.css'
import { Link } from 'react-router-dom';
function BasicExample() {

  return (
            <div className='header-con'>
        <div> <h1>GEN AI</h1> </div>    

         <div className='search'>  <input/> </div>
         <div><Link to="/gen"><Button variant="primary" >Generate AI Image</Button></Link></div>

         </div>
  );
}

export default BasicExample;