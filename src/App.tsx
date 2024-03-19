import './App.scss'
import './fonts/Cagliostro.ttf'
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import ChangePasswordPage from "./pages/change/ChangePassword.tsx";
import ChangePseudoPage from "./pages/change/ChangePseudo.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* no auth */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                {/* When user is logged in */}
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/change-pseudo" element={<ChangePseudoPage/>}/>
                <Route path="/change-password" element={<ChangePasswordPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
