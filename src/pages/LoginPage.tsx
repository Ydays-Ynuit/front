import Logo from "../components/Logo.tsx";

const LoginPage = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full">
                <Logo/>
                {/*<div className="fixed -top-10 left-0 w-full ml-16 relative text-2xl">*/}
                {/*    <IoArrowBackCircleOutline/>*/}
                {/*</div>*/}
            </div>

            <div className="container">
                <div className="heading">
                    <h2>Inscription</h2>
                </div>
                <div className="content">
                    <div className="form">
                        <p>Pseudo</p>
                        <input type="text" className="bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="pseudo"/>
                    </div>
                    <div className="form">
                        <p>Mot de passe</p>
                        <input type="text" className="bg-black bg-opacity-40 rounded-xl py-1 px-3"
                               placeholder="******"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
