"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RedirectPage = () => {

    const route = useRouter();

    useEffect(() => {
        route.push("/");
    }, [route]);

    return (
        <div></div>
    );
};

export default RedirectPage;