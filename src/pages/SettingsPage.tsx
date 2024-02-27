import {Link} from "react-router-dom";
import Menuitems from "../components/Menuitems.tsx";

const SettingsPage = () => {
    return (
        <div>return (
            <div>
                <h1>Settings</h1>
                <ul>
                    <li><Link to="/Acceuil">`
                        <Menuitems content={"Acceuil"} />
                    </Link></li>
                    <li><Link to="/profile">
                        <Menuitems content={"Profile"} />
                    </Link></li>
                    <li><Link to="/paramètres">
                        <Menuitems content={"Paramètres"} />
                    </Link></li>
                    <li><Link to="/support">
                        <Menuitems content={"Support"} />
                    </Link></li>
                </ul>
            </div>
            )
        </div>
    );
};

export default SettingsPage;
