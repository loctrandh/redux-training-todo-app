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
import { connect } from 'react-redux';

function App({ todoState, themeState, onAddTodo, onDeleteTodo, onToggleTodo }) {
  const handleToggleTodo = id => {
    onToggleTodo(id);
  };

  const handleDeleteTodo = id => {
    onDeleteTodo(id);
  };

  const handleAddTodo = todo => {
    onAddTodo(todo);
  };

  const config = {
    initialColorMode: getInitialColorMode(themeState),
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
              data={getTodosList(todoState)}
              onComplete={handleToggleTodo}
            />
            <CompletedList
              data={getCompletedList(todoState)}
              onUndo={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

const mapStateToProps = state => ({
  todoState: state.todoState,
  themeState: state.themeState,
});

const mapDispatchToProps = {
  onAddTodo: doAddTodo,
  onToggleTodo: doToggleTodo,
  onDeleteTodo: doDeleteTodo,
};

// Original version
// const mapDispatchToProps = dispatch => ({
//   onAddTodo: todo => dispatch(doAddTodo(todo)),
//   onToggleTodo: id => dispatch(doToggleTodo(id)),
//   onDeleteTodo: id => dispatch(doDeleteTodo(id)),
// });

// Another way to get state & dispatch
// useSelector
// useReducer

export default connect(mapStateToProps, mapDispatchToProps)(App);
