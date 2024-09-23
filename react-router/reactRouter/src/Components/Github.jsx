import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function Github() {
    const data = useLoaderData(); // useLoaderData to fetch the user data

    return (
        <>
            <div className="bg-black text-white p-4 text-2xl">
                GitHub followers: {data.followers}
            </div>
        </>
    );
}

export const gitHubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}
