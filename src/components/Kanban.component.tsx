import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import * as S from "@styles/components/Kanban.styles";
import { Column as StyledColumn, Row } from "@styles/Common.styles";
import {
  faCheckSquare,
  faClock,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { mainColors } from "@utils/colors";
import { createNotification } from "./NotificationFlag.component";
import { ModalPostDetails } from "./ModalPostDetails.component";
import { Post } from "types/Posts.types";

export type Card = {
  id: string;
  title: string;
  lastUpdateTime: string;
  publishDate: string;
};
export type Column = { id: string; title: string; cards: Card[] };
export type Columns = Record<string, Column>;
interface KanbanProps {
  posts: Post[];
  columns: Columns;
  setColumns: React.Dispatch<React.SetStateAction<Columns>>;
  onStatusChange: (postId: string, newStatus: string) => Promise<void>;
}

function isValidTransition(from: string, to: string): boolean {
  const invalidTransitions: [string, string][] = [
    ["READED", "NEW"],
    ["READED", "DONE"],
    ["DONE", "NEW"],
    ["DONE", "READED"],
    ["DONE", "SENT"],
    ["SENT", "NEW"],
    ["NEW", "SENT"],
    ["NEW", "DONE"],
  ];

  return !invalidTransitions.some(
    ([invalidFrom, invalidTo]) => from === invalidFrom && to === invalidTo
  );
}

export function Kanban({
  posts,
  columns,
  setColumns,
  onStatusChange,
}: KanbanProps) {
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const onDragEnd = async (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (!isValidTransition(source.droppableId, destination.droppableId)) {
      createNotification({
        type: "error",
        message: `Não é possível mover de "${
          columns[source.droppableId].title
        }" para "${columns[destination.droppableId].title}"`,
      });
      return;
    }

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceCards = [...sourceColumn.cards];
    const [removed] = sourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCards.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          cards: sourceCards,
        },
      });
    } else {
      const destCards = [...destColumn.cards];
      destCards.splice(destination.index, 0, {
        ...removed,
        lastUpdateTime: "0s",
      });

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          cards: sourceCards,
        },
        [destination.droppableId]: {
          ...destColumn,
          cards: destCards,
        },
      });
      await onStatusChange(removed.id, destination.droppableId);
    }
  };

  return (
    <>
      <S.KanbanContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(columns).map(([columnId, column]) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <S.KanbanColumn
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Row alignCenter>
                    {columnId === "DONE" ? (
                      <>
                        <S.HeaderIcon icon={faCheckSquare} size="lg" />
                        <h1 style={{ color: mainColors.primary }}>
                          {column.title}
                        </h1>
                        <h2>{column.cards.length}</h2>
                      </>
                    ) : (
                      <>
                        <h1 style={{ color: mainColors.secondary }}>
                          {column.title}
                        </h1>
                        <h2>{column.cards.length}</h2>
                      </>
                    )}
                  </Row>
                  {column.cards.length === 0 && (
                    <S.EmptyMessage>{"Nenhum card encontrado"}</S.EmptyMessage>
                  )}
                  {column.cards.map((card, index) => (
                    <Draggable
                      key={card.id}
                      draggableId={card.id}
                      index={index}
                    >
                      {(provided) => (
                        <S.KanbanCard
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => {
                            const postInfo = posts.find(
                              (el) => el.id === card.id
                            );
                            setSelectedPost(postInfo);
                          }}
                        >
                          <StyledColumn>
                            <h2>{card.title}</h2>
                            <Row>
                              <S.CardIcon icon={faClock} size="sm" />
                              <h3>{card.lastUpdateTime}</h3>
                              <S.CardIcon icon={faCalendar} size="sm" />
                              <h3>{card.publishDate}</h3>
                            </Row>
                          </StyledColumn>
                        </S.KanbanCard>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </S.KanbanColumn>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </S.KanbanContainer>
      {selectedPost && (
        <ModalPostDetails
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </>
  );
}
