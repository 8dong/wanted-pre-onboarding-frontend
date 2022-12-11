import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/page/LoginPage';
import { useSelector } from 'react-redux';

import type { RootState } from './components/redux/store/store';

function App() {
  const isAuthorized = useSelector((store: RootState) => store.auth);

  return (
    <Routes>
      <Route path='/' element={isAuthorized ? <Navigate to={'/todo'} /> : <LoginPage />} />
      <Route path='/todo' element={isAuthorized ? <>TodoList Page</> : <Navigate to={'/'} />} />
    </Routes>
  );
}

export default App;
