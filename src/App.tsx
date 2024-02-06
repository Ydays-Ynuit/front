import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsPage from "./pages/SettingsPage.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
              <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
