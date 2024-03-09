import { Link, useLoaderData } from "react-router-dom";


const Posts = () => {
    const loadedPosts = useLoaderData();
    // console.log(loadedPosts);
    return (
        <div className="blog_container">
            <h3 className="home-header">   Welcome to Blog Page</h3>
            <h4>Total Available Post: {loadedPosts.length}</h4>
            {
                loadedPosts.map(post => <div 
                className="post"
                 key={post.id}>
                Blog {post.id} : {post.title} 
                <Link to={`/posts/${post.id}`}><button className="btn">Show Details</button></Link>
                </div>)
            }
        </div>
    );
};

export default Posts;