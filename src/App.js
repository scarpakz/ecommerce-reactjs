import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />} path='/'></Route>
        <Route element={<HomePage/>} path='/'></Route>
      </Routes>
    </>
  );
}

export default App;
