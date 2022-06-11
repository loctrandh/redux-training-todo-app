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
import { getInitialColorMode } from 'reducers/theme/selectors';
import { doAddTodo, doDeleteTodo, doToggleTodo } from 'reducers/todo/actions';
import { getCompletedList, getTodosList } from 'reducers/todo/selectors';
import store from 'store';

function App() {
  const handleToggleTodo = id => {
    store.dispatch(doToggleTodo(id));
  };

  const handleDeleteTodo = id => {
    store.dispatch(doDeleteTodo(id));
  };

  const handleAddTodo = todo => {
    store.dispatch(doAddTodo(todo));
  };

  const config = {
    initialColorMode: getInitialColorMode(store.getState()),
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
              data={getTodosList(store.getState())}
              onComplete={handleToggleTodo}
            />
            <CompletedList
              data={getCompletedList(store.getState())}
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
