import './App.scss'
import './fonts/Cagliostro.ttf'
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from "./components/Logo.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/logo" element={<Logo />} />
              <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
