import Logo from "../components/Logo.tsx";
import './HomePage.scss';
import {useState} from "react";
import LoginOrRegister from "../components/LoginOrRegister.tsx";
import MessagesPage from "./MessagesPage.tsx";

const HomePage = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false)
    const connected = loggedIn ? "connecté" : "non connecté";
    return (
        <div className="opacity-0 animate-fade-in">
            <Logo/>
            <button
                className="text-white text-2xl fixed top-3 left-2 "
                onClick={() => setLoggedIn(!loggedIn)}>{connected}
            </button>
            {loggedIn ? (
                <div className="mt-4">
                    <MessagesPage/>
                </div>
            ) : <LoginOrRegister/>}
        </div>
    );
};

export default HomePage;
