import { Box, Center, Container, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Flex h='15vh' minW='100%' justifyContent='center'  bgColor='#4169E1'>
        <Center fontStyle='italic' fontSize='3xl' color='white'>
          Kanban Trecking trend
        </Center>
      </Flex>
    </>
  )
}
