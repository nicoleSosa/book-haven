
import { Link } from "react-router-dom";


export default function Navbar(){
    const bookIcon = require("./images/colorBook.png");
    return <nav className ="nav-style">

        <div className="logo-brandName"> 
            <img className="icon" src={bookIcon} alt="book" /> 
            <Link to="/browse" className="nav-title"> Book Haven</Link>
        </div>
       
        <ul>
            <li > <Link to="/browse"> Browse</Link> </li>
            <li> <Link to="/list"> Reading List</Link> </li>
        </ul>

    </nav>

}