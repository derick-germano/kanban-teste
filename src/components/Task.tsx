import { Box, Flex, Text } from '@chakra-ui/react';
import { Draggable } from '@hello-pangea/dnd'

interface TaskProps {
  task: {
    id: string;
    name: string;
  }
  index: number;
}

export function Task({ task, index}: TaskProps) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          width='full'
          bg='white'
          borderRadius='4px'
          padding='2vh'
          marginTop='1vh'
        >
          <Flex alignItems='center' marginLeft='5vh' fontSize='medium'>{task.name}</Flex>
        </Box>
      )}
    </Draggable>
  );
}