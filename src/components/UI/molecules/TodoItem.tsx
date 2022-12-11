import styled from 'styled-components';

import Button from '../atoms/Button';

import type { TodoType } from '../../redux/slice/todoListSlice';

const TodoItem = ({ todo }: { todo: TodoType }) => {
  return (
    <TodoItemWrapper isCompleted={todo.isCompleted}>
      <strong className='todoText'>{todo.todo}</strong>
      <strong className='isCompleted'>{todo.isCompleted ? 'Completed' : 'Incomplete'}</strong>
      <div className='buttonGroup'>
        <Button bgColor='#0066ff' onClick={() => {}}>
          Edit
        </Button>
        <Button bgColor='#e74c3c' onClick={() => {}}>
          Delete
        </Button>
      </div>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div<{ isCompleted: boolean }>`
  min-height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  border-radius: 20px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;

  .todoText {
    margin: 0 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    word-break: break-all;
  }

  .isCompleted {
    align-self: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;

    width: max-content;
    height: 40px;
    padding: 5px;
    border-radius: 10px;
    background-color: ${(props) => (props.isCompleted ? '#0066ff' : '#d35400')};

    color: #fff;
  }

  .buttonGroup {
    display: flex;
    justify-content: center;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default TodoItem;
