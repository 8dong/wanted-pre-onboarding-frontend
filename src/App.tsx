import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';

import LoginPage from './components/page/LoginPage';
import TodoListPage from './components/page/TodoListPage';
import ModalLayout from './components/layout/ModalLayout';

import ModalContext from './context/modal/modalContext';

import type { RootState } from './redux/store/store';

function App() {
  const isAuthorized = useSelector((store: RootState) => store.auth);

  const { isShowModal, modalContent } = useContext(ModalContext)!;

  return (
    <>
      {isShowModal && <ModalLayout>{modalContent}</ModalLayout>}
      <Routes>
        <Route path='/' element={isAuthorized ? <Navigate to={'/todo'} /> : <LoginPage />} />
        <Route path='/todo' element={isAuthorized ? <TodoListPage /> : <Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
