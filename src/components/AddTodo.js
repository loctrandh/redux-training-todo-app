import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [newValue, setNewValue] = useState('');
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();

    if (!newValue) {
      toast({
        title: 'You must enter your task!',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const newTodo = {
      id: nanoid(),
      body: newValue,
    };

    onAdd(newTodo);
    setNewValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          value={newValue}
          variant={'filled'}
          placeholder={'Add new todo item'}
          onChange={e => setNewValue(e.target.value)}
        ></Input>
        <Button colorScheme={'blue'} px={'8'} type={'submit'}>
          Submit
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
