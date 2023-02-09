import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getAllComments = async () => {
    const {data} = await axios.get(`http://localhost:3000/comments`)
    return data;
}

const Comments = () => {
    


    return (
        <div>
        
        </div>
    )
}

export default Comments;

//  "comments": [
 //   { "id": 1, "body": "some comment", "postId": 1 }
 // ],

 //GET  /posts/1/comments