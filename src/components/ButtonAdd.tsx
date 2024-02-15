'use client';
import { Button } from '@chakra-ui/react';
import React from 'react'

 interface ButtonProps {
  onClick: () => void;
 }

export default function ButtonAdd({onClick} : ButtonProps) {
  return (
     <>
       <Button
         onClick={onClick}
         size='md'
         height='48px'
         width='200px'
         border='2px'
         borderColor='green.500'
       >
         Adicinar tarefa
       </Button>
     </>
  )
}


// import { Button } from '@chakra-ui/react';
// import React from 'react';

// interface ButtonProps {
//   onClick: () => void;
// }

// const ButtonAdd: React.FC<ButtonProps> = ({ onClick }) => {
//   return (
//     <>
//       <Button
//         onClick={onClick}
//         size='md'
//         height='48px'
//         width='200px'
//         border='2px'
//         borderColor='green.500'
//       >
//         Adicinar tarefa
//       </Button>
//     </>
//   );
// };

// export default ButtonAdd;
