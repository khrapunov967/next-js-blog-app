import PostItem from "./PostItem";

const PostsContainer = ({posts}) => {
    return (
        <div className="w-full flex flex-wrap gap-7 justify-center">
            {
                posts.map(post => <PostItem post={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsContainer;