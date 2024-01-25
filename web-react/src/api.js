import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async (searchTerm = "") => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        _limit: 10,
        q: searchTerm,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
