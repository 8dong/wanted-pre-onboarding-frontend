import styled from 'styled-components';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../atoms/Button';

import ModalContext from '../../../context/modal/modalContext';
import todosSlice from '../../../redux/slice/todoListSlice';

const ModalDeleteConfirmSection = ({ todoId }: { todoId: number }) => {
  const { hideModalHandler } = useContext(ModalContext)!;

  const dispatch = useDispatch();

  const handleClickCancelButton = () => {
    hideModalHandler();
  };

  const deleteTodoRequest = (todoId: number) => {
    fetch(`https://pre-onboarding-selection-task.shop/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
      }
    });

    dispatch(todosSlice.actions.deleteTodo(todoId));
    hideModalHandler();
  };

  const handleClickDeleteButton = () => {
    deleteTodoRequest(todoId);
  };

  return (
    <ModalDeleteConfirmSectionWrapper>
      <h2>Are you sure you want to delete it?</h2>
      <div className='buttonGroup'>
        <Button bgColor='#d4d4d4' onClick={handleClickCancelButton}>
          Cancel
        </Button>
        <Button bgColor='#e74c3c' onClick={handleClickDeleteButton}>
          Confirm
        </Button>
      </div>
    </ModalDeleteConfirmSectionWrapper>
  );
};

const ModalDeleteConfirmSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 20px;

  h2 {
    margin-bottom: 20px;
  }

  .buttonGroup {
    align-self: flex-end;

    display: flex;
  }

  .buttonGroup button {
    margin: 10px;
  }
`;

export default ModalDeleteConfirmSection;
