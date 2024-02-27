import './ButtonYN.scss';
import {NavLink} from "react-router-dom";

const Menuitems = ({content}) => {
    return (
        <NavLink to={content} className='menu-items'>
            {content}
        </NavLink>
    );
};

export default Menuitems;