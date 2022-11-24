import { BASE_API_URL } from "./constants";

export const fetchPosts = async () => {
    const response = await fetch(`${BASE_API_URL}/posts`, {cache: "force-cache"});
    return response.json();
};

export const fetchUserData = async (id) => {
    const response = await fetch(`${BASE_API_URL}/users/${id}`, {cache: "force-cache"});
    return response.json();
};

export const fetchPostData = async (id) => {
    const response = await fetch(`${BASE_API_URL}/posts/${id}`, {cache: "force-cache"});
    return response.json();
};

export const fetchComments = async (id) => {
    const response = await fetch(`${BASE_API_URL}/posts/${id}/comments`, {cache: "force-cache"});
    return response.json();
};