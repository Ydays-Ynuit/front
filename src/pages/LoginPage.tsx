import Logo from "../components/Logo.tsx";
import ButtonYn from "../components/ButtonYN.tsx";
import {IoArrowBackCircleOutline} from "@react-icons/all-files/io5/IoArrowBackCircleOutline";
import {NavLink} from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full">
                <Logo/>
                <NavLink
                    to="/"
                    className="text-white "
                >
                    <div className="fixed -top-10 left-0 ml-16 relative text-2xl">
                        <IoArrowBackCircleOutline/>
                    </div>
                </NavLink>
            </div>

            <div className="container -translate-y-12">
                <div className="-translate-y-12">
                    <h2 className="text-xl">Connexion</h2>
                </div>
                <div className="content">
                    <div className="text-left">
                        <p className="my-2">Pseudo</p>
                        <input type="text" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="pseudo"/>
                    </div>
                    <div className="text-left mt-4">
                        <p className="my-2">Mot de passe</p>
                        <input type="password" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="******"/>
                    </div>
                    <div className="mt-16">
                        <ButtonYn content="Connexion"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
