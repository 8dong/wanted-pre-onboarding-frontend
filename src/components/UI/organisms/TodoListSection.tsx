import styled from 'styled-components';
import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoItem from '../molecules/TodoItem';
import Button from '../atoms/Button';

import todosSlice from '../../redux/slice/todoListSlice';

import type { RootState } from '../../redux/store/store';

const TodoList = () => {
  const todoList = useSelector((store: RootState) => store.todoList);

  const dispatch = useDispatch();

  const getTodosRequest = useCallback(async () => {
    try {
      const response = await fetch('https://pre-onboarding-selection-task.shop/todos', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
        }
      });

      const body = await response.json();

      if (!response.ok) throw new Error(body.message);

      dispatch(todosSlice.actions.setTodos(body));
    } catch (err) {
      window.alert((err as Error).message);
    }
  }, [dispatch]);

  useEffect(() => {
    getTodosRequest();
  }, [getTodosRequest]);

  return (
    <TodoListSectionWrapper>
      <h3>Todo List</h3>
      <div className='addButton'>
        <Button bgColor='#0066ff' onClick={() => {}}>
          Add Todo
        </Button>
      </div>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </TodoListSectionWrapper>
  );
};

const TodoListSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 20px;

  .addButton {
    align-self: flex-end;

    margin: 10px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: space-evenly;
  }

  li {
    margin: 20px;
  }
`;

export default TodoList;
