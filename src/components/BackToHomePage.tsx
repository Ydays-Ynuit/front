import React from 'react';
import {NavLink} from "react-router-dom";
import {IoArrowBackCircleOutline} from "@react-icons/all-files/io5/IoArrowBackCircleOutline";

const BackToHomePage = () => {
    return (
        <NavLink
            to="/"
            className="text-white text-2xl fixed top-3 left-2 "
        >
            <IoArrowBackCircleOutline/>
        </NavLink>
    );
};

export default BackToHomePage;
