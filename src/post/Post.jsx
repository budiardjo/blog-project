import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://ik.imagekit.io/fndn595ujcn/tengyart-Q78W18T-dss-unsplash_8UkZHXRoo.jpg?updatedAt=1627448682942" 
            alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">List</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum sed explicabo error repellat maiores assumenda similique. Saepe doloremque deleniti mollitia fuga veritatis, sequi ipsam est deserunt blanditiis accusantium eaque pariatur?</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}
