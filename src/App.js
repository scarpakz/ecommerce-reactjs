import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { KidsPage } from './pages/kids/KidsPage';
import { MenPage } from './pages/men/MenPage';
import { SalePage } from './pages/sale/SalePage';
import { SportPage } from './pages/sport/SportPage';
import { WomenPage } from './pages/women/WomenPage';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<HomePage/>} path='/'></Route>
        <Route element={<KidsPage/>} path='/kids'></Route>
        <Route element={<MenPage/>} path='/men'></Route>
        <Route element={<SalePage/>} path='/sale'></Route>
        <Route element={<SportPage/>} path='/sport'></Route>
        <Route element={<WomenPage/>} path='/women'></Route>
      </Routes>
    </>
  );
}

export default App;
