import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Page does not exist</h2>
            <Link to="/">Home</Link>
        </div>
     );
}
 
export default NotFound;