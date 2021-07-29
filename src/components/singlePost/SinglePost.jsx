import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg" 
                    src="https://ik.imagekit.io/fndn595ujcn/jimmy-dean-Yn0l7uwBrpw-unsplash_uO0zX0G3Y.jpg?updatedAt=1627528169745" 
                    alt="" 
                />
                <h1 className="singlePostTitle">lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                
                
                </h1>
            <div className="singlePostInfo">

                <span className="singlePostAuthor">Author: <b>widjoyono</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita perspiciatis tempore iusto adipisci sequi, consequatur nulla exercitationem sint dignissimos alias architecto! Magni culpa vel perferendis sed eum. Illo, mollitia beatae!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita perspiciatis tempore iusto adipisci sequi, consequatur nulla exercitationem sint dignissimos alias architecto! Magni culpa vel perferendis sed eum. Illo, mollitia beatae! </p>
            </div>
            
        </div>
    )
}
