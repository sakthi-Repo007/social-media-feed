import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () =>
  axios.get(`${BASE_URL}/posts`).then((res) => res.data);

export const fetchUsers = () =>
  axios.get(`${BASE_URL}/users`).then((res) => res.data);

export const fetchComments = (postId) =>
  axios.get(`${BASE_URL}/posts/${postId}/comments`).then((res) => res.data);
