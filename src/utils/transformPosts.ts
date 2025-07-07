import { Columns } from "components/Kanban.component";
import { Post } from "types/Posts.types";
import { formatShortDistanceToNow } from "./conversor";
import { addHours, format } from "date-fns";

export function transformPostsToColumns(posts: Post[]) {
  const initialColumns: Columns = {
    NEW: { id: "NEW", title: "Nova publicação", cards: [] },
    READED: { id: "READED", title: "Publicação lida", cards: [] },
    SENT: { id: "SENT", title: "Enviar para advogado responsável", cards: [] },
    DONE: { id: "DONE", title: "Concluído", cards: [] },
  };

  posts.forEach((post) => {
    const status = post.status || "NEW";
    initialColumns[status].cards.push({
      id: post.id,
      title: post.numero_processo,
      lastUpdateTime: post.updated_at
        ? formatShortDistanceToNow(new Date(post.updated_at))
        : "desconhecido",
      publishDate: post.data_publicacao
        ? format(
            addHours(new Date("2024-10-02T00:00:00.000Z"), 3),
            "dd/MM/yyyy"
          ) //Lidando com UTC-3
        : "desconhecida",
    });
  });

  return initialColumns;
}
