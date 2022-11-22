import Link from "next/link";

const PostItem = ({post}) => {
    return (
        <Link href={"/1"} className="rounded-lg flex flex-col w-full max-w-[200px] p-3 cursor-pointer transition-all duration-300 hover:shadow-lg">
            <header className="w-full">
                <h3 className="font-semibold text-xl">
                    {post.title}
                </h3>
            </header>

            <main className="w-full mb-3">
                <p className="text-stone-600">
                    {post.body.slice(0, 20)}...
                </p>
            </main>

            <footer className="w-full flex justify-end">
                <p className="text-stone-800">
                    @username
                </p>
            </footer>
        </Link>
    );
};

export default PostItem;