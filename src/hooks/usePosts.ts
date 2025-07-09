import { useEffect, useState } from "react";
import { getPosts, fetchFilteredPosts } from "@services/posts";
import { transformPostsToColumns } from "@utils/transformPosts";
import { Post } from "types/Posts.types";
import { Columns } from "@components/Kanban.component";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [columns, setColumns] = useState<Columns>({});
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const take = 30;

  const fetchPosts = async () => {
    setIsLoading(true);
    const data = await getPosts();
    setPosts(data);
    setSkip(30);
    setColumns(transformPostsToColumns(data));
    setIsLoading(false);
  };

  const fetchFirstFilteredPosts = async (filters = {}) => {
    setIsLoading(true);
    const more = await fetchFilteredPosts({ ...filters, skip: 0, take });

    setPosts([...more]);
    setColumns(transformPostsToColumns([...more]));
    setSkip(0 + more.length);
    setIsLoading(false);
  };
  const fetchMorePosts = async (filters = {}) => {
    setIsLoading(true);
    const more = await fetchFilteredPosts({ ...filters, skip, take });

    setPosts((prev) => [...prev, ...more]);
    setColumns(transformPostsToColumns([...posts, ...more]));
    setSkip((prev) => prev + more.length);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    columns,
    setColumns,
    fetchPosts,
    fetchMorePosts,
    skip,
    setSkip,
    fetchFirstFilteredPosts,
    isLoading,
  };
};
