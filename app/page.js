import { fetchPosts } from "./utils/fetch_funcs";
import PostsContainer from "./components/PostsContainer";

const Page = async () => {

    const posts = await fetchPosts();

    return (
        <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto ">
            <div className="w-full max-w-[80%] flex flex-col items-center">
                <div className="flex justify-center items-center w-full mb-10">
                    <h2 className="font-bold text-4xl">
                        All Posts
                    </h2>
                </div>

                <PostsContainer posts={posts} />
            </div>
        </section>
    );
};

export default Page;