import UserCard from "../../components/UserCard";
import CommentsContainer from "../../components/CommentsContainer";
import { fetchPostData, fetchUserData, fetchComments } from "../../utils/fetch_funcs";

const PostDetailsPage = async ({params}) => {

    const post = await fetchPostData(params.id);
    const user = await fetchUserData(post.userId);
    const comments = await fetchComments(post.id);

    return (
        <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto">
            <h2 className="font-bold text-5xl mb-10 text-center">
                {post.title}
            </h2>

            <div className="w-full max-w-[50%] mb-5">
                <p className="text-xl text-center">
                    {post.body}
                </p>
            </div>

            <div className="w-full max-w-[50%] flex justify-end mb-10">
                <UserCard 
                    user={user} 
                />
            </div>

            <CommentsContainer 
                comments={comments} 
            />
        </section>
  );
}

export default PostDetailsPage;
