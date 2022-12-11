import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginPage from './components/page/LoginPage';
import TodoListPage from './components/page/TodoListPage';

import type { RootState } from './redux/store/store';

function App() {
  const isAuthorized = useSelector((store: RootState) => store.auth);

  return (
    <Routes>
      <Route path='/' element={isAuthorized ? <Navigate to={'/todo'} /> : <LoginPage />} />
      <Route path='/todo' element={isAuthorized ? <TodoListPage /> : <Navigate to={'/'} />} />
    </Routes>
  );
}

export default App;
