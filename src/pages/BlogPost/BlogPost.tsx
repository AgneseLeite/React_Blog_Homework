import { BlogPostType } from "../Blog/Blog";
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom"; 
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";


const getAllBlogPosts = async (id: string) => {
    const {data} = await axios.get(`http://localhost:3000/posts/${id}`)
    return data;
}

const BlogPost = () => {
    const [ showEditForm, setShowEditForm] = useState(false);
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
   // const [ fields, setFields ] = useState({...post});


    const deletePost = useMutation((id: string) => {
        return axios.delete(`http://localhost:3000/posts/${id}`)
      });


    const { data, isLoading, mutate } = useQuery<BlogPostType>(["blogPost", id], () => getAllBlogPosts(id!));

    // const handleChange = (e: React.SyntheticEvent<EventTarget>) => {
    //     const { name, value } = e.target;
    // }


    //const updatePost = ({id, ...updatedPost}: BlogPostType) => 
    //    axios.put(`http://localhost:3000/posts/${id}`, updatedPost).then((response) => response.data);

    const showForm = () => {
        setShowEditForm(true);
    }

   

     if (isLoading) {
         return <h3>Loading...</h3>
     }
     if (!data) {
         navigate("/");
         return null;
     }

    // console.log(data)

    const { image, title, description } = data;

    return (
        <div className="single-post">
            <img src={image} alt={title} className="image"/>
            <div className="post__info">
                <h3 className="post__title">{title}</h3>
                <p className="post__description">{description}</p>
            </div>

            <Link to={`/blog/${id}/comments`}>
                <span className="comments">Comments...</span>
            </Link>
            
            <button className="edit-btn" onClick={showForm}>Edit</button>
            <button className="delete-btn" onClick={() => deletePost.mutate(id!)}>Delete</button>
            <div className="form-container edit-form">
                {showEditForm && ( 
                    <form onSubmit={(e) => (e.preventDefault())} action="" className="form">
                    <h2 className="form__heading">Edit: </h2>
                    <input 
                        type="text" 
                        defaultValue={image} 
                        className="form-input"
                        placeholder="Change image..."/>
                    <input 
                        type="text" 
                        defaultValue={title}
                        className="form-input" 
                        placeholder="Edit title..."/>
                    <textarea 
                        defaultValue={description}
                        className="form-input" 
                        placeholder="Edit description..."/>
                        <button className="check-btn">✔</button>
                    </form>
                )}
        
            </div>  
        </div>
    )
}


export default BlogPost;
