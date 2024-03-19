import './App.scss'
import './fonts/Cagliostro.ttf'
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from "./components/Logo.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
