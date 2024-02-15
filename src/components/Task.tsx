import { Box, Checkbox, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import { Draggable } from '@hello-pangea/dnd'
import { useState } from 'react';

interface TaskProps {
  task: {
    id: string;
    name: string;   
  }
  index: number;
}

export function Task({ task, index}: TaskProps) {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };
  
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
          <Flex alignItems='center' marginLeft='5vh' fontSize='medium'>            
            {task.name}
            <Spacer />
            <Stack >
              <Checkbox colorScheme='red' borderColor='black' defaultChecked={isCheckboxChecked} onChange={handleCheckboxChange}>
              {isCheckboxChecked && <Box fontStyle='italic' fontSize='sm' padding='3px' color='white' bg='red' borderRadius='5px'>Importante</Box>}
              </Checkbox>
            </Stack>
          </Flex>
        </Box>
      )}
    </Draggable>
  );
}