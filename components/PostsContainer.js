import { useState, useEffect } from "react";
import axios from "axios";
import PostItem from "./PostItem";

const PostsContainer = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="w-full flex flex-wrap gap-7 justify-center">
            {
                posts.map(post => <PostItem post={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsContainer;