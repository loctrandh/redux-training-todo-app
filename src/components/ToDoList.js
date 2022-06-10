import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const ToDoList = ({ data, onComplete }) => {
  if (!data.length) {
    return (
      <Badge colorScheme={'green'} p={'4'} borderRadius={'lg'}>
        No Todos, huray!!!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor={'gray.100'}
      borderWidth={'2px'}
      borderRadius={'lg'}
      p={'4'}
      w={'100%'}
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems={'stretch'}
    >
      {data.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.content}</Text>
          <Spacer />
          <IconButton
            icon={<FaCheck />}
            isRound={true}
            aria-label="Complete"
            title="Complete"
            onClick={() => onComplete(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default ToDoList;
