import './App.scss'
import Logo from './components/Logo.tsx';
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/logo" element={<Logo />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
