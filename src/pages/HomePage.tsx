import Logo from "../components/Logo.tsx";
import ChatMessage from "../components/Chat/ChatMessage.tsx";
import Menuitems from "../components/Menuitems.tsx";

const HomePage = () => {
    return (
        <div>
            <Logo />
            <ChatMessage />
            <Menuitems content={"Valider"} />
        </div>
    );
};

export default HomePage;
