import api from "@services/api";

interface FilterPostsParams {
  skip?: number;
  take?: number;
  textToSearch?: string;
  startDate?: Date;
  endDate?: Date;
}

export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data.posts;
};

export async function fetchFilteredPosts(params: FilterPostsParams = {}) {
  const res = await api.get("/filter-posts", { params });
  return res.data.posts;
}
