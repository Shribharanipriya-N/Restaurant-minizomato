import { Link } from "react-router-dom";


export const Header = () => {
    return(
      <nav className="header">
      <img
      className="foodlogo"
      src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"
      alt="logo"></img>
      <h1>ZOMATO</h1>
      <ul>
        <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
        <li><Link to="/about"style={{textDecoration:'none'}}>About</Link></li>
        <li><Link to="/contact"style={{textDecoration:'none'}}>Contact</Link></li>
      </ul> 
      </nav>
    );
  };
  
 