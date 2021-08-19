import Axios from "axios";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const [hobby, setHobby] = useState("Swimming");

    // const handleClick = (e) => {
    //     console.log("Good morning", setHobby("Playing Pool"));
    // };

    // const handleClickMe = (name, e) => {
    //     console.log(name, e)
    // }
    const [isPending, setPending] = useState(true);

    const [blogs, setBlogs] = useState(null)

    const handleDelete = (id) => {
        setBlogs(blogs.filter((blog) => blog.id !== id));
    }
    useEffect(() => {
        const abortCont = new AbortController();
        Axios.get("http://127.0.0.1:8000/api/v1/items/", { signal : abortCont.signal})
        .then(res => {
            if(res.statusText !== "OK"){
                throw Error('could not fetch the data for that resource');
            }
            console.log(res)
            setBlogs(res.data.results)
            setPending(false)
        }).catch((error) => {
            // handle error
            if (error.name === 'AbortError'){
                console.log("Fetch Aborted");
            }else{
                setPending(false)
            }
            //console.log(error);
        })
        return () => abortCont.abort();
    }, [])
    return ( 
        <div>
            { isPending && <li>Loading</li>}
            {blogs && <BlogList blogs = {blogs} title="Blog title" handleDelete = {handleDelete} />}
        </div>
        
     );
}
 
export default Home;