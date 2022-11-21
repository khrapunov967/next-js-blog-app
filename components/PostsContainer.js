import PostItem from "./PostItem";

const PostsContainer = () => {
    return (
        <div className="w-full flex flex-wrap gap-7 justify-center">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
};

export default PostsContainer;