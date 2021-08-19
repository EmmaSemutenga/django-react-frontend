import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <h2>{blog.name}</h2>
                        </Link>
                        
                        <p>{blog.id}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                    </div>
                ))}
                
            </div>
        </div> 
        
     );
}
 
export default BlogList;