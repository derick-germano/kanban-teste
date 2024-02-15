'use client'
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import ButtonAdd from "./ButtonAdd";
import { DragDropContext, Droppable, Draggable, DropResult  } from '@hello-pangea/dnd'

const reorder = (list: string[], startIndex: number, endIndex: number): string[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const Column: React.FC = () => {
  const [divs, setDivs] = useState<string[]>([]);

  const criarNovaDiv = () => {
    const novaDiv = `Nova Div ${divs.length + 1}`;
    setDivs((prevDivs) => [...prevDivs, novaDiv]);
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const reorderedDivs = reorder(divs, result.source.index, result.destination.index);
    setDivs(reorderedDivs);
  };

  const onDragStart = () => {
    console.log("Início do arrasto");
    // Adicione sua lógica para o início do arrasto aqui
  };

  const onDragUpdate = (update: DropResult) => {
    console.log("Atualização do arrasto");
    // Adicione sua lógica para atualização durante o arrasto aqui
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragUpdate={onDragUpdate}>
    <Droppable droppableId="column" direction="vertical">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ButtonAdd onClick={criarNovaDiv} />
          <SimpleGrid margin="10vh" columns={3} spacing={5}>
            <Droppable droppableId="box" direction="vertical">
              {(provided) => (
                <Box
                  bg="#B0C4DE"
                  borderRadius="10px"
                  height="60vh"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Center bg="#FF0000">A Fazer</Center>
                  {divs.map((div, index) => (
                    <Draggable key={index} draggableId={`div-${index}`} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            border: '1px solid black',
                            margin: '10px',
                            padding: '10px',
                            backgroundColor: snapshot.isDragging ? '#FFD700' : 'white',
                          }}
                        >
                          {div}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
            {/* ... rest of the code */}
          </SimpleGrid>
        </div>
      )}
    </Droppable>
  </DragDropContext>
  );
};

export default Column;