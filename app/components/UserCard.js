import Link from "next/link";

const UserCard = ({user}) => {
    return (
        <Link href={`/users/${user.id}`} className="flex cursor-pointer gap-4 items-center p-2 rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="w-[40px] h-[40px] pl-[0.5px] pt-1 rounded-full flex justify-center items-center bg-stone-600">
                <p className="text-white">
                    {user.username.slice(0, 2)}
                </p>
            </div>

            <div className="flex flex-col">
                <p className="font-semibold">
                    {user.username}
                </p>

                <p className="text-stone-600">
                    {user.email}
                </p>
            </div>
        </Link>
    );
};

export default UserCard;