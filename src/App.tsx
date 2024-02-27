import './App.scss'
import './fonts/Cagliostro.ttf'
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from "./components/Logo.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logo" element={<Logo />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
