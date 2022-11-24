"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectPage = () => {

    const route = useRouter();

    useEffect(() => {
        route.push("/");
    }, [route]);

    return (
        <section className="flex flex-col items-center w-full max-w-[1600px] my-0 mx-auto">
            <div className="absolute top-[40%] flex flex-col items-center gap-4">
                <h2 className="text-8xl font-bold">
                    404 :(
                </h2>

                <p className="text-2xl text-center">
                    This Page Was Not Found <br/>
                    You Will Be Redirected
                </p>
            </div>
        </section>
    );
};

export default RedirectPage;