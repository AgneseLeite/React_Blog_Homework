import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"; 
import axios from "axios";

export type BlogPostType = {
    id?: number,
    image: string,
    title: string,
    excerpt?: string,
    description?: string
}

const getAllBlogPosts = async () => {
    const {data} = await axios.get("http://localhost:3000/posts")
    return data;
}


const Blog = () => {

    const { data, isLoading} = useQuery<BlogPostType[]>(["allBlogPosts"], getAllBlogPosts);

    if (isLoading) {
        return <h3>Loading...</h3>
    }
    if (!data) {
        return <h3>Oooopsy Daisy :/</h3>
    }

    return (
        <div>
            <h1 className="heading">Blog</h1>
            <div className="blog__posts">
            {data.map(({id, image, title, excerpt}) => (
                <Link to={`/blog/${id}`} key={id}>
                    <div key={id} className="post">
                    <img src={image} alt={title} className="image"/>
                    <div className="post__info">
                        <h3 className="post__title">{title}</h3>
                        <p className="post__excerpt">{excerpt}</p>
                        <br />
                        <span className="read-more">Read more...</span>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Blog;