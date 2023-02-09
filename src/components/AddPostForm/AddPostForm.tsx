import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { BlogPostType } from "../../pages/Blog/Blog";

const AddPostForm = () => {
    const [ image, setImage ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ excerpt, setExcerpt ] = useState("");
    const [ description, setDescription ] = useState("");

    const queryClient = useQueryClient();

    const mutation = useMutation((newPost: BlogPostType) => {
        return axios.post("http://localhost:3000/posts", newPost)
      });

      // const mutation = useMutation((newPost: BlogPostType) => {
      //   return axios.post("http://localhost:3000/posts", newPost)
      //   {
      //       onSuccess: () => {
      //           QueryClient.invalidateQueries();
      //       }
      //   }
      // });


    return (
        <div className="form-container">
            <form onSubmit={(e) => e.preventDefault()} action="" className="form">
            <h2 className="form__heading">Add new post</h2>
            <input 
                type="text" 
                className="form-input"
                value={image} 
                onChange={(e) => setImage(e.target.value)}
                placeholder="Add image link..."/>
            <input 
                type="text" 
                className="form-input" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add title..."/>
            <input 
                type="text" 
                className="form-input"
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                placeholder="Add excerpt..."/>
            <textarea 
                className="form-input" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add full description..."/>
                
                <button 
                onClick={() => {
                    mutation.mutate({
                                      image: image, 
                                      title: title,
                                      excerpt: excerpt,
                                      description: description,
                                    })
                }}
                className="add">Add</button>
               
            </form>
        </div>  
    )
}

export default AddPostForm;

