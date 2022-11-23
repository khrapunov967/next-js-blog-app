import PostItem from "./PostItem";

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};

const PostsContainer = async () => {

    const posts = await getPosts();

    return (
        <div className="w-full flex flex-wrap gap-7 justify-center">
            {
                posts.map(post => <PostItem post={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsContainer;