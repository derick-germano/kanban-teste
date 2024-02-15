'use client'
import { useState, FormEvent } from 'react'
import { Task } from './Task';
import { DragDropContext, Droppable } from '@hello-pangea/dnd'
import { Box, Button, Center, Container, Flex, Input, SimpleGrid } from '@chakra-ui/react';

export default function Column() {
  const [newTast, setNewTask] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: "0",
      name: "Estudar react com typescript"
    },
    {
      id: "1",
      name: "Inscrever no canal do Sujeito Programador"
    },
    {
      id: "2",
      name: "Pagar o aluguel"
    },
  ])


  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    if (newTast === "") return;

    const newItem = {
      id: `${tasks.length + 1}`,
      name: newTast
    }
    setTasks(allTasks => [...allTasks, newItem])
    setNewTask("")
  }

  function reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result;
  }

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    const items = reorder(tasks, result.source.index, result.destination.index)
    setTasks(items);
  }

  return (
    <>
      <Box>
        <Center>
          <Box fontSize='4xl' fontFamily='bold' marginBottom='4'>Tarefas</Box>
        </Center>

        <Center>
          <form onSubmit={handleAddTask}>
            <Flex>
              <Input
                w='100vh'
                type="text"
                placeholder="Digite a tarefa..."
                value={newTast}
                onChange={(event) => setNewTask(event.target.value)}
              />
              <Button
                marginLeft='1'
                type="submit"
                colorScheme='teal' size='md'
              >
                Adicionar
              </Button>
            </Flex>
          </form>
        </Center>

        <Center marginTop='2vh'>
          <Box borderRadius='15px' bg='#87CEFA' w='140vh'>
            <Box margin='3vh'>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId='tasks' type='list' direction='vertical'>
                  {(provided) => (
                    <article
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                      ))}

                      {provided.placeholder}
                    </article>
                  )}
                </Droppable>
              </DragDropContext>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  )
}
