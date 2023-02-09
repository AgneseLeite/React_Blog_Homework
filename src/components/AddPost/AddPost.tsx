import { Routes, Route, NavLink, Link } from "react-router-dom";

const AddPost = () => {

    return (
        <div>
            <Link to="/form">
                <button className="add-btn">Add Post</button>
            </Link>
        </div>
    )
}

export default AddPost;