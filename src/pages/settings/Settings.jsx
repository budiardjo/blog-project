import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                       <img 
                            src="https://ik.imagekit.io/fndn595ujcn/tanner-marquis-lHqySkSh2KY-unsplash_1cdQsydCKY.jpg?updatedAt=1627616271943" 
                            alt="" 
                       /> 
                       <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                       </label>

                       <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="widjoyono"/>
                    <label>Email</label>
                    <input type="text" placeholder="abrorabyyu9@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

