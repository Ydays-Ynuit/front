import Logo from "../components/Logo.tsx";
import ButtonYn from "../components/ButtonYN.tsx";
import BackToHomePage from "../components/BackToHomePage.tsx";
import React from "react";

const LoginPage = () => {
    return (
        <>
            <BackToHomePage/>
            <div className="-translate-y-8">
                <Logo/>
            </div>
            <div>
                <div className="mt-32">
                    <h2 className="text-xl">Inscription</h2>
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
                    <div className="text-left">
                        <p className="my-2">Retaper le mot de passe</p>
                        <input type="password" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="******"/>
                    </div>
                    <div className="mt-16">
                        <ButtonYn content="S'inscrire"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
