import api from "@services/api";
import { logout } from "@utils/auth";
import { Kanban } from "components/Kanban.component";
import { createNotification } from "components/NotificationFlag.component";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";

const Posts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [columns, setColumns] = useState<any>();

  const getFirstPosts = async () => {
    try {
      const response = await api.get("/posts");
      console.log("posts response", response);

      setPosts(response.data.posts);

      setColumns({
        lanes: [
          {
            id: "lane1",
            title: "Planned Tasks",
            label: "2/2",
            cards: [
              {
                id: "Card1",
                title: "Write Blog",
                description: "Can AI make memes",
                label: "30 mins",
                draggable: false,
              },
              {
                id: "Card2",
                title: "Pay Rent",
                description: "Transfer via NEFT",
                label: "5 mins",
                metadata: { sha: "be312a1" },
              },
            ],
          },
          {
            id: "lane2",
            title: "Completed",
            label: "0/0",
            cards: [],
          },
        ],
      });
    } catch (error: any) {
      createNotification({
        type: "error",
        message: error.response.data.errors
          ? error.response.data.errors[0].message
          : error.response.data.message,
      });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const onDragEnd = () => {
    console.log("drag ended");
  };
  const onDragStart = () => {
    console.log("drag started");
  };
  const renderCard = () => {
    console.log("drag ended");
  };

  useLayoutEffect(() => {
    if (posts.length === 0) {
      getFirstPosts();
    }
  }, []);
  const data = {
    lanes: [
      {
        id: "lane1",
        title: "A Fazer",
        cards: [
          {
            id: "card1",
            title: "Tarefa 1",
            description: "Descrição da tarefa 1",
          },
        ],
      },
      {
        id: "lane2",
        title: "Feito",
        cards: [],
      },
    ],
  };
  return (
    <div>
      <h2>Posts Privados</h2>
      <button onClick={() => console.log(posts)}>log posts</button>
      <button onClick={handleLogout}>Sair</button>
      <Kanban />
    </div>
  );
};

export default Posts;
