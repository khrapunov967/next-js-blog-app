
const UserProfile = () => {
    return (
        <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto">
            <div className="flex gap-4 items-center mb-10">
                <p className="bg-stone-500 rounded-full flex justify-center items-center w-[90px] h-[90px] text-white text-4xl pr-[0.5px] pt-1">
                    U
                </p>

                <div className="flex flex-col">
                    <p className="text-2xl">
                        Alex Gray
                    </p>

                    <p className="text-xl text-stone-600">
                        @username
                    </p>
                </div>
            </div>

            <div className="w-full max-w-[30%] flex flex-col items-center gap-3">
                <div className="flex gap-2">
                    <p className="text-xl text-stone-600">
                        E-mail:
                    </p>

                    <p className="text-xl">
                        username@gmail.com
                    </p>
                </div>

                <div className="flex gap-2">
                    <p className="text-xl text-stone-600">
                        Phone:
                    </p>

                    <p className="text-xl">
                        +79233456789
                    </p>
                </div>

                <div className="flex gap-2">
                    <p className="text-xl text-stone-600">
                        Company:
                    </p>

                    <p className="text-xl">
                        Google.Inc
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;