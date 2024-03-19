import {NavLink} from "react-router-dom";
import ButtonYn from "./ButtonYN.tsx";

const LoginOrRegister = () => {
    return (
        <>
            <div className="mt-32">
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
        </>
    );
};

export default LoginOrRegister;
