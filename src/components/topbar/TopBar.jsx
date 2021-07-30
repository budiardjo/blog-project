import { Link } from "react-router-dom";
import "./topbar.css";


export default function TopBar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/" >HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/" >WRITE</Link></li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                <img 
                    className='topImg'
                    src="https://ik.imagekit.io/fndn595ujcn/lucas-benjamin-wQLAGv4_OYs-unsplash_BnsGt3l7h.jpg" 
                    alt="" 
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
