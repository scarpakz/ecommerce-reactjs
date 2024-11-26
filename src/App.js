import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage/>} path='/'></Route>
      </Routes>
    </>
  );
}

export default App;
