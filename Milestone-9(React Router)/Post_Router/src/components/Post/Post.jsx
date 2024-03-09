import { useLoaderData } from "react-router-dom";


const Post = () => {
    const loadedPost = useLoaderData();
    console.log(loadedPost); 
    const {id,title,body} = loadedPost;
    return (
        <div className="home">
        <div className="blog">
            <h2>Blog Id: {id}</h2>
            <h4><span className="span">Blog Title:</span> {title}</h4>
            <p><span className="span">Main Content:</span> {body}</p>
        </div>
        </div>
    );
};

export default Post;