import Logo from "../components/Logo.tsx";
import ChatMessage from "../components/Chat/ChatMessage.tsx";
import ButtonYn from "../components/ButtonYN.tsx";
import {IoSettingsOutline} from "@react-icons/all-files/io5/IoSettingsOutline";
import {FaUserPlus} from "@react-icons/all-files/fa/FaUserPlus";
import {BiMessageSquareEdit} from "@react-icons/all-files/bi/BiMessageSquareEdit";
import SearchBar from "../components/Chat/SearchBar.tsx";

const HomePage = () => {
    return (
        <div>
            <Logo />
            <ChatMessage />
            <ButtonYn content={"Valider"} />
            <IoSettingsOutline />
            <FaUserPlus />
            <BiMessageSquareEdit />
            <SearchBar />
            <UserResultSearch />
        </div>
    );
};

export default HomePage;
