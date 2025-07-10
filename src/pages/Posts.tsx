import { usePosts } from "@hooks/usePosts";
import { Kanban } from "@components/Kanban.component";
import { createNotification } from "@components/NotificationFlag.component";
import api from "@services/api";
import { Navbar } from "@components/Navbar.component";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { PostFilters } from "@components/PostFilters.component";
import * as S from "@styles/Posts.styles";
import { Row } from "@styles/Common.styles";
import { faBalanceScaleLeft } from "@fortawesome/free-solid-svg-icons";
import { LoadingSpinner } from "@components/LoadingSpinner.component";

const Posts = () => {
  const {
    posts,
    columns,
    setColumns,
    fetchMorePosts,
    fetchFirstFilteredPosts,
    isLoading,
  } = usePosts();
  const [filters, setFilters] = useState<{
    textToSearch?: string;
    startDate?: Date;
    endDate?: Date;
  }>({});

  const updatePostStatus = async (postId: string, newStatus: string) => {
    try {
      await api.put(`/update-post`, { id: postId, status: newStatus });
    } catch (error: any) {
      createNotification({
        type: "error",
        message: "Erro ao atualizar status",
      });
    }
  };

  // Scroll infinito monitorado pela janela
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const nearBottom = scrollTop + windowHeight >= documentHeight - 100;

      if (nearBottom) {
        fetchMorePosts(filters).catch(() => {
          createNotification({
            type: "error",
            message: "Erro ao buscar mais publicações",
          });
        });
      }
    }, 300);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMorePosts]);

  return (
    <>
      <Navbar />
      <S.LoadingWrapper>
        <LoadingSpinner loading={isLoading} />
      </S.LoadingWrapper>
      <S.ContentWrapper>
        <S.FilterWrapper>
          <Row alignCenter>
            <S.Icon icon={faBalanceScaleLeft} size="2x" />
            <S.SectionHeader>Publicações</S.SectionHeader>
          </Row>
          <PostFilters
            onFilterChange={(f) => {
              setFilters(f);
              fetchFirstFilteredPosts(f);
            }}
          />
        </S.FilterWrapper>
        <Kanban
          posts={posts}
          columns={columns}
          setColumns={setColumns}
          onStatusChange={updatePostStatus}
        />
      </S.ContentWrapper>
    </>
  );
};

export default Posts;
