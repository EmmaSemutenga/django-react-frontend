import { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name }

        // fetch('http://127.0.0.1:8000/api/v1/items/', {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(blog)
        // }).then()

        Axios.post("http://127.0.0.1:8000/api/v1/items/", blog
        )
        .then(function (response) {
            console.log(response);
            history.push('/')
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return ( 
        <div className="create">
            <form onSubmit={ handleSubmit }>
                <label>Name</label>
                <input type="text" required onChange = { (e) => setName(e.target.value) }/>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;