import React from 'react';
import Logo from "../../components/Logo.tsx";
import {NavLink} from "react-router-dom";
import {IoArrowBackCircleOutline} from "@react-icons/all-files/io5/IoArrowBackCircleOutline";
import ButtonYn from "../../components/ButtonYN.tsx";
import {FaPenAlt} from "@react-icons/all-files/fa/FaPenAlt";

const ChangePseudoPage = () => {
    return (
        <>
            <div className="-translate-y-8">
                <Logo/>
            </div>
            <NavLink
                to="/"
                className="text-white text-2xl fixed top-3 left-2 "
            >
                <IoArrowBackCircleOutline/>
            </NavLink>

            <div>
                <div className="mt-32">
                    <h1 className="flex justify-center mb-4">
                        <FaPenAlt/>
                    </h1>
                    <h2 className="text-xl mb-12">Modifier mon pseudo</h2>
                </div>
                <div className="content">
                    <div className="text-left">
                        <p className="my-2">Nouveau pseudo</p>
                        <input type="text" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="pseudo"/>
                    </div>
                    <div className="text-left mt-4">
                        <p className="my-2">Mot de passe</p>
                        <input type="password" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="******"/>
                    </div>
                    <div className="text-left">
                        <p className="my-2">Token de sécurité</p>
                        <input type="password" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="******"/>
                    </div>
                    <div className="mt-16">
                        <ButtonYn content="Valider"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChangePseudoPage;
