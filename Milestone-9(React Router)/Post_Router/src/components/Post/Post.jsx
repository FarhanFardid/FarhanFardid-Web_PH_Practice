import { useLoaderData } from "react-router-dom";


const Post = () => {
    const loadedPost = useLoaderData();
    console.log(loadedPost); 
    const {id,title,body} = loadedPost;
    return (
        <div className="home">
        <div className="blog">
            <h2>Blog Id: {id}</h2>
            <h3>Blog Title: {title}</h3>
            <h4>Main Content: {body}</h4>
        </div>
        </div>
    );
};

export default Post;