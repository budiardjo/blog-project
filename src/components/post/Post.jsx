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
                <span className="postTitle">Lorem ipsum dolor sit amet</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nobis itaque consequatur doloribus beatae voluptas quo doloremque qui vitae ullam, repudiandae culpa! Doloribus aperiam libero amet optio doloremque minus fuga.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nobis itaque consequatur doloribus beatae voluptas quo doloremque qui vitae ullam, repudiandae culpa! Doloribus aperiam libero amet optio doloremque minus fuga.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nobis itaque consequatur doloribus beatae voluptas quo doloremque qui vitae ullam, repudiandae culpa! Doloribus aperiam libero amet optio doloremque minus fuga.
            </p>
        </div>
    )
}
