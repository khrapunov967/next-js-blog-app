import PostsContainer from "./components/PostsContainer";

const Page = async () => {
    return (
        <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto ">
            <div className="w-full max-w-[80%] flex flex-col items-center">
                <h2 className="font-bold text-3xl mb-10">
                    All Posts
                </h2>

                <PostsContainer />
            </div>
        </section>
    );
};

export default Page;