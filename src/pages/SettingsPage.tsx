import {Link} from "react-router-dom";

const SettingsPage = () => {
    return (
        <div>return (
            <div>
                <h1>Settings</h1>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/profile">Profil</Link></li>
                    <li><Link to="/settings">Paramètres</Link></li>
                    <li><Link to="/support">Support</Link></li>
                </ul>
            </div>
            )
        </div>
    );
};

export default SettingsPage;
