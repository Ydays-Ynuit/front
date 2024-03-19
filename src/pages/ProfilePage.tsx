import React from 'react';
import Logo from "../components/Logo.tsx";
import {FaRegUserCircle} from "@react-icons/all-files/fa/FaRegUserCircle";
import {IoKeySharp} from "@react-icons/all-files/io5/IoKeySharp";
import {FaPenAlt} from "@react-icons/all-files/fa/FaPenAlt";
import BackToHomePage from "../components/BackToHomePage.tsx";
import {NavLink} from "react-router-dom";

const ProfilePage = () => {
    return (
        <>
            <div>
                <BackToHomePage/>
                <Logo/>
                <h1 className="text-2xl mt-4">Mon profil</h1>
                <FaRegUserCircle className="text-9xl mx-auto mt-4"/>
                <h1 className="text-2xl mt-4">Pseudo</h1>
            </div>
            <div>
                <div className="mt-12">
                    <h2 className="text-left -translate-x-2 text-gray-400">Mon compte : </h2>
                </div>
                <div className="content">
                    <div className="text-left flex justify-between my-12">
                        <p className="">Modifier mon pseudo</p>
                        <NavLink to="/change-pseudo">
                            <FaPenAlt className="hover:text-2xl hover:cursor-pointer transition-all"/>
                        </NavLink>
                    </div>
                    <div className="text-left flex justify-between">
                        <p className="">Modifier mon mot de passe</p>
                        <NavLink to="/change-password">
                            <IoKeySharp className="hover:text-2xl hover:cursor-pointer transition-all"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
