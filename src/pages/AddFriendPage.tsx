import './AddFriendPage.scss';
import SearchBar from "../components/SearchBar.tsx";
import UserResultSearch from "../components/UserResultSearch.tsx";
import Logo from '../components/Logo';
import {IoArrowBackCircleOutline} from "@react-icons/all-files/io5/IoArrowBackCircleOutline";
import { NavLink } from "react-router-dom";

const style = {width: "1.5em", height: "1.5em"};

const HomePage = () => {
    return (
        <div>
            <div className="head">
                <div className="arrow">
                    <NavLink to="/">
                        <IoArrowBackCircleOutline style={style} />
                    </NavLink>
                </div>
                <div className="logo">
                    <Logo />
                </div>
            </div>
            <div className="searchbar">
                <SearchBar />
            </div>
            <div className="resultSearch">
                <UserResultSearch />
            </div>
        </div>
    );
};

export default HomePage;
