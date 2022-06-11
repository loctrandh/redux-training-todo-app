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
import store from 'store';

function App() {
  const initialColorMode = store.getState().themeState.colorMode;

  const handleToggleTodo = id => {
    store.dispatch({
      type: 'TODO_TOGGLE',
      payload: id,
    });
  };

  const handleDeleteTodo = id => {
    store.dispatch({
      type: 'TODO_DELETE',
      payload: id,
    });
  };

  const handleAddTodo = todo => {
    store.dispatch({
      type: 'TODO_ADD',
      payload: todo,
    });
  };

  const config = {
    initialColorMode,
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  const todos = store.getState().todoState;

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
