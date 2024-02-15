import { Box, Center, SimpleGrid } from "@chakra-ui/react";

export default function Column() {
  return (
    <>
      <SimpleGrid margin='10vh' columns={3} spacing={5}>
        <Box bg='#B0C4DE' borderRadius='10px' height='60vh'>
          <Center bg='#FF0000'>A Fazer</Center>          
        </Box>
        <Box bg='#B0C4DE' borderRadius='10px' height='60vh'>
          <Center bg='#FFD700'>Em Progresso</Center>  
        </Box>
        <Box bg='#B0C4DE' borderRadius='10px' height='60vh'>
          <Center bg='#00FF00'>Concluídas</Center>  
        </Box>
      </SimpleGrid>
    </>
  )
}
