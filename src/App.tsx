import './App.scss'
import HomePage from "./pages/HomePage.tsx";
import { BrowserRouter, Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
