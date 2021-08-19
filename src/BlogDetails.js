import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";

const BlogDetails = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);
    const history = useHistory();

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/v1/items/${id}`)
          .then((res) => {
            console.log(res.data);
            setBlog(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    
    }, []);

    const handleDelete = () => {
      Axios.delete(`http://127.0.0.1:8000/api/v1/items/${id}`)
          .then((res) => {
            console.log(res);
            history.push('/')
          })
          .catch((err) => {
            console.log(err);
          });
    }

    return ( 
    <div className="blog-details">
        {blog && <h2>Blog details {blog.id}--{blog.name}</h2>}
        <button onClick={handleDelete}>Delete</button>
    </div> 
    );
}
 
export default BlogDetails;