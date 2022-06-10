import {
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  Heading,
  VStack,
} from '@chakra-ui/react';
import AddTodo from 'components/AddTodo';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import CompletedList from 'components/CompletedList';
import ToDoList from 'components/ToDoList';
import React, { useState } from 'react';

function App() {
  const initialTodo = [
    { id: 1, content: 'Redux', completed: false },
    { id: 2, content: 'React Redux', completed: false },
    { id: 3, content: 'Redux Middleware', completed: false },
    { id: 4, content: 'Redux Toolkit', completed: false },
  ];
  const initialColorMode = 'dark';

  const [todos, setTodos] = useState(initialTodo);

  const handleToggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const handleAddTodo = todo => {
    setTodos([...todos, todo]);
  };

  const config = {
    initialColorMode,
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading
              mb={'8'}
              fontWeight={'extrabold'}
              size={'2xl'}
              bgGradient={'linear(to-r, pink.500, pink.300, blue.500)'}
              bgClip={'text'}
            >
              Todo Application
            </Heading>
            <AddTodo onAdd={handleAddTodo} />

            <ToDoList
              data={todos.filter(x => !x.completed)}
              onComplete={handleToggleTodo}
            />
            <CompletedList
              data={todos.filter(x => x.completed)}
              onUndo={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
