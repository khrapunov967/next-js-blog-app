import CommentItem from "../components/CommentItem";
import CommentsContainer from "../components/CommentsContainer";
import UserCard from "../components/UserCard";

const Post = () => {
    return (
        <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto">
            <h2 className="font-bold text-5xl mb-10">
                Post Title
            </h2>

            <div className="w-full max-w-[50%] mb-5">
                <p className="text-xl text-center">
                    Lorem Lorem  Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                    Lorem Lorem Lorem Lorem Lorem Lorem
                </p>
            </div>

            <div className="w-full max-w-[50%] flex justify-end mb-10">
                <UserCard />
            </div>

            <CommentsContainer />
        </section>
    );
};

export default Post;