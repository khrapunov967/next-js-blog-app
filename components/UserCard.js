import Link from "next/link";

const UserCard = () => {
    return (
        <Link href={"users/1"} className="flex cursor-pointer gap-4 items-center p-2 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="w-[40px] h-[40px] pl-[0.5px] pt-1 rounded-full flex justify-center items-center bg-stone-600">
                <p className="text-white">
                    U
                </p>
            </div>

            <div className="flex flex-col">
                <p className="font-semibold">
                    UserName
                </p>

                <p className="text-stone-600">
                    username@gmail.com
                </p>
            </div>
        </Link>
    );
};

export default UserCard;