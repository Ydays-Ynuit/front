import Logo from "../components/Logo.tsx";
import ChatMessage from "../components/Chat/ChatMessage.tsx";
import ButtonYn from "../components/ButtonYN.tsx";

const HomePage = () => {
    return (
        <div>
            <Logo />
            <ChatMessage />
            <ButtonYn content={"Valider"} />
        </div>
    );
};

export default HomePage;
