import Logo from "../components/Logo.tsx";
import './HomePage.scss';
import ButtonYn from "../components/ButtonYN.tsx";
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div className="opacity-0 animate-fade-in">
                <Logo/>
            </div>
            <div className="h-screen flex items-center justify-center opacity-0 animate-fade-out">
                <div className="loader"></div>
            </div>
            <div className="opacity-0 animate-fade-in">
                <div className="mt-16">
                    <NavLink
                        to="/login"
                        className="text-white hover:text-white"
                    >
                        <ButtonYn content="Se connecter"/>
                    </NavLink>
                </div>
                <div className="mt-16">
                    <NavLink
                        to="/registration"
                        className="text-white hover:text-white"
                    >
                        <ButtonYn content="S'inscrire"/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
