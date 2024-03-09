import { useLoaderData } from "react-router-dom";


const Post = () => {
    const loadedPost = useLoaderData();
    console.log(loadedPost); 
    const {id,title,body} = loadedPost;
    return (
        <div className="home">
        <div className="blog">
            <h2>Blog Id: {id}</h2>
            <h4>Blog Title: {title}</h4>
            <p>Main Content: {body}</p>
        </div>
        </div>
    );
};

export default Post;