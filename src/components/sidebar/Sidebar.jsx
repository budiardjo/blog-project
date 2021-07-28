import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img 
                    className="sidebarImg"
                    src="https://ik.imagekit.io/fndn595ujcn/bruno-adam-9n-WKWQZrno-unsplash__1__JL6dYwPNs.jpg?updatedAt=1627445073148"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas harum repudiandae eaque, tenetur eligendi ratione! Quisquam in, velit qui doloremque delectus labore explicabo iste odit expedita aut nulla ab facere.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>        
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"></span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
