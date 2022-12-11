import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../atoms/Button';
import InputField from '../atoms/InputField';

import ModalContext from '../../../context/modal/modalContext';
import todoListSlice from '../../../redux/slice/todoListSlice';

import type { TodoType } from '../../../redux/slice/todoListSlice';

const ModalFormSection = ({ type, todo }: { type: 'Edit' | 'Add'; todo?: TodoType }) => {
  const [todoValue, setTodoValue] = useState(type === 'Edit' ? todo!.todo : '');
  const [isCompleted, setIsCompleted] = useState(type === 'Edit' ? todo!.isCompleted : false);

  const { hideModalHandler } = useContext(ModalContext)!;

  const dispatch = useDispatch();

  const addTodoRequest = async (todo: string) => {
    try {
      const response = await fetch('https://pre-onboarding-selection-task.shop/todos', {
        method: 'POST',
        body: JSON.stringify({ todo }),
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
          'Content-Type': 'application/json'
        }
      });

      const body = await response.json();

      if (!response.ok) throw new Error(body.message);

      dispatch(todoListSlice.actions.addTodo(body));
    } catch (err) {
      window.alert((err as Error).message);
    }
  };

  const editTodoRequest = async (todoId: number, todo: string, isCompleted: boolean) => {
    try {
      const response = await fetch(`https://pre-onboarding-selection-task.shop/todos/${todoId}`, {
        method: 'PUT',
        body: JSON.stringify({ todo, isCompleted }),
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
          'Content-type': 'application/json'
        }
      });

      const body = await response.json();

      if (!response.ok) throw new Error(body.message);

      dispatch(todoListSlice.actions.editTodo(body));
    } catch (err) {
      window.alert((err as Error).message);
    }
  };

  const handleChangeTodoInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };

  const handleClickCompleteButton = () => {
    setIsCompleted((prev) => !prev);
  };

  const handleClickCancelButton = () => {
    hideModalHandler();
  };

  const handleClickAddButton = () => {
    addTodoRequest(todoValue);

    hideModalHandler();
  };

  const handleClickEditButton = () => {
    editTodoRequest(todo!.id, todoValue, isCompleted);
    setTodoValue('');
    setIsCompleted(false);

    hideModalHandler();
  };

  return (
    <ModalFormSectionWrapper>
      <h2>{type} Todo</h2>
      <div className='todoform'>
        <div className='todoInput'>
          <InputField
            id='todoInput'
            value={todoValue}
            onChange={handleChangeTodoInput}
            placeholder='wirte Todo'
          />
        </div>

        {type === 'Edit' && (
          <Button bgColor={isCompleted ? '#0066ff' : '#d35400'} onClick={handleClickCompleteButton}>
            {isCompleted ? 'Completed' : 'InComplete'}
          </Button>
        )}

        <div className='buttonGroup'>
          <Button bgColor='#e74c3c' onClick={handleClickCancelButton} type='button'>
            Cancel
          </Button>
          <Button
            bgColor='#0066ff'
            onClick={type === 'Edit' ? handleClickEditButton : handleClickAddButton}
            type='button'
          >
            {type}
          </Button>
        </div>
      </div>
    </ModalFormSectionWrapper>
  );
};

const ModalFormSectionWrapper = styled.section`
  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  .todoform {
    display: flex;
    flex-direction: column;
  }

  .todoInput {
    margin-bottom: 10px;
  }

  .buttonGroup {
    align-self: flex-end;

    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default ModalFormSection;
