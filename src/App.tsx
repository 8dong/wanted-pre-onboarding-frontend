import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<>Login Page</>} />
      <Route path='/todo' element={<>TodoList Page</>} />
    </Routes>
  );
}

export default App;
