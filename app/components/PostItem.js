import Link from "next/link";
import { fetchUserData } from "../utils/fetch_funcs";

const PostItem = async ({post}) => {
    
    const {username} = await fetchUserData(post.userId); 

    return (
        <Link href={`/posts/${post.id}`} className="overflow-hidden rounded-lg flex flex-col w-full max-w-[350px] min-h-[300px] cursor-pointer shadow-md transition-all duration-300 hover:translate-y-[-3px]">
            <div className="w-full bg-stone-500 h-[187px] relative flex justify-center mb-[40px]">
                <div className="absolute top-[63%] w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl bg-white border-2 border-stone-500 text-stone-600">
                    {
                        username.slice(0, 2)
                    }
                </div>
            </div>

            <div className="flex flex-col justify-between h-full">
                <div className="w-full px-5">
                    <p className="font-bold text-2xl text-center">
                        {post.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default PostItem;