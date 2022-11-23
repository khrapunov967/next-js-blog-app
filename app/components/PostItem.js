import Link from "next/link";

const PostItem = ({post}) => {
    return (
        <Link href={`/posts/${post.id}`} className="rounded-lg border-2 flex flex-col justify-between w-full max-w-[200px] p-3 cursor-pointer transition-all duration-300 hover:shadow-lg">
            <div>
                <div className="w-full">
                    <h3 className="font-semibold text-xl">
                        {post.title.slice(0, 10)}...
                    </h3>
                </div>

                <div className="w-full mb-3">
                    <p className="text-stone-600">
                        {post.body.slice(0, 60)}...
                    </p>
                </div>
            </div>

            <footer className="w-full flex justify-end">
                <p className="text-stone-800">
                    @username
                </p>
            </footer>
        </Link>
    );
};

export default PostItem;