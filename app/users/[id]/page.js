
export const fetchUserData = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
};

const UserDetailsPage = async ({params}) => {

    const {id} = params;
    const user = await fetchUserData(id);

  return (
    <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto">
        <div className="mb-5 flex gap-5 items-center">
            <div className="py-5 px-6 rounded-full bg-stone-600 text-white text-2xl">
                {user.username.slice(0, 2)}
            </div>

            <div className="flex flex-col">
                <p className="text-2xl font-semibold">
                    {user.name}
                </p>

                <p className="text-stone-600">
                    @{user.username}
                </p>
            </div>
        </div>

        <div className="w-full max-w-[50%] flex flex-col gap-3 items-center">
            <div className="flex gap-2 items-center">
                <p className="text-2xl text-stone-600">
                    Website:
                </p>

                <p className="text-xl">
                    {user.website}
                </p>
            </div>

            <div className="flex gap-2 items-center">
                <p className="text-2xl text-stone-600">
                    Email:
                </p>

                <p className="text-xl">
                    {user.email}
                </p>
            </div>

            <div className="flex gap-2 items-center">
                <p className="text-2xl text-stone-600">
                    Company:
                </p>

                <p className="text-xl">
                    {user.company.name}
                </p>
            </div>
        </div>
    </section>
  );
};

export default UserDetailsPage
