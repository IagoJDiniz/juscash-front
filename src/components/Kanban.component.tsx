import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";
import * as S from "@styles/components/Kanban.styles";
import { Column, Row } from "@styles/Common.styles";
import {
  faCheckSquare,
  faClock,
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import { mainColors } from "@utils/colors";
import { createNotification } from "./NotificationFlag.component";

type Card = {
  id: string;
  title: string;
  lastUpdateTime: string;
  publishDate: string;
};
type Column = { id: string; title: string; cards: Card[] };
type Columns = Record<string, Column>;

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

const initialData: Columns = {
  NEW: {
    id: "NEW",
    title: "Nova publicação",
    cards: [
      {
        id: "1",
        title: "0029091-39.2024.8.26.0053",
        lastUpdateTime: "30s",
        publishDate: "21/10/2024",
      },
      {
        id: "2",
        title: "0029091-39.2024.8.26.0053",
        lastUpdateTime: "30s",
        publishDate: "21/10/2024",
      },
    ],
  },
  READED: {
    id: "READED",
    title: "Publicação lida",
    cards: [
      {
        id: "3",
        title: "0029091-39.2024.8.26.0053",
        lastUpdateTime: "30s",
        publishDate: "21/10/2024",
      },
    ],
  },
  SENT: {
    id: "SENT",
    title: "Enviar para advogado responsável",
    cards: [
      {
        id: "4",
        title: "0029091-39.2024.8.26.0053",
        lastUpdateTime: "30s",
        publishDate: "21/10/2024",
      },
    ],
  },
  DONE: {
    id: "DONE",
    title: "Concluído",
    cards: [
      {
        id: "5",
        title: "Tarefa 3",
        lastUpdateTime: "30s",
        publishDate: "21/10/2024",
      },
    ],
  },
};

export function Kanban() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (!isValidTransition(source.droppableId, destination.droppableId)) {
      console.log(source);
      // createNotification({type:'error',message:`Não é possível mover de`})
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
      destCards.splice(destination.index, 0, removed);

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
    }
  };

  return (
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
                {column.cards.map((card, index) => (
                  <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided) => (
                      <S.KanbanCard
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => console.log("click")}
                      >
                        <Column>
                          <h2>{card.title}</h2>
                          <Row>
                            <S.CardIcon icon={faClock} size="sm" />
                            <h3>{card.lastUpdateTime}</h3>
                            <S.CardIcon icon={faCalendar} size="sm" />
                            <h3>{card.publishDate}</h3>
                          </Row>
                        </Column>
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
  );
}
