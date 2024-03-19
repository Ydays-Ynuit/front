import Logo from "../components/Logo.tsx";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import axios from "axios";
import ButtonYn from "../components/ButtonYN.tsx";
import BackToHomePage from "../components/BackToHomePage.tsx";

const url = "http://localhost:3030/users";
const LoginPage = () => {
    const [inputData, setInputData] = useState({
        name: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(url, inputData).then(() => navigate('/'));
    };

    return (
        <>
            <BackToHomePage/>
            <div className="-translate-y-8">
                <Logo/>
            </div>
            <div>
                <div className="mt-32">
                    <h2 className="text-xl">Connexion</h2>
                </div>
                <div className="content">
                    <form onSubmit={handleSubmit}>

                        <div className="text-left">
                            <p className="my-2">Pseudo</p>
                            <input type="text" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                                   placeholder="pseudo"
                                   name="name"
                                   onChange={e => setInputData({...inputData, name: e.target.value})}
                            />
                        </div>
                        <div className="text-left mt-4">
                            <p className="my-2">Mot de passe</p>
                            <input type="password" className="w-full bg-black bg-opacity-40 rounded-xl py-1 px-3"
                                   placeholder="******"
                                   name="password"
                                   onChange={e => setInputData({...inputData, password: e.target.value})}
                            />
                        </div>
                        <div className="mt-16">
                            <ButtonYn content="Connexion"/>
                        </div>
                    </form>

                </div>
            </div>
        </>
    );
};

export default LoginPage;
