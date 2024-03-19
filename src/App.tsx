import './App.scss'
import './fonts/Cagliostro.ttf'
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from "./components/Logo.tsx";
import AddFriendPage from './pages/AddFriendPage.tsx';

function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/add" element={<AddFriendPage />} />
          </Routes>
        </BrowserRouter>
  )
}

export default App
