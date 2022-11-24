import Link from "next/link";
import { fetchUserData } from "../utils/fetch_funcs";

const PostItem = async ({post}) => {
    
    const {username} = await fetchUserData(post.userId); 

    return (
        <Link href={`/posts/${post.id}`} className="overflow-hidden rounded-lg flex flex-col w-full max-w-[350px] min-h-[350px] cursor-pointer border-[1px] border-stone-400">
            <div className="w-full bg-slate-500 h-[187px] relative flex justify-center mb-[40px]">
                <div className="absolute top-[63%] w-[70px] h-[70px] rounded-full flex justify-center items-center text-2xl bg-white border-2 border-slate-500 text-slate-600">
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

                <div className="w-full flex justify-end p-2">
                    <p className="text-stone-800 text-xl">
                        @{username}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default PostItem;