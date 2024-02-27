import './UserResultSearch.scss';
import {FaPlus} from "@react-icons/all-files/fa/FaPlus";

export interface Props {
    content: string;
}
const style = {marginRight: "0.5em"};
const UserResultSearch = () => {
    return (
        <div className="div">
            <div className='searchResult-div'>
                <img className="profile-picture" src="../src/assets/logo.png" alt="" />                
                <p className="userName">UserName</p>
                <button className='btnAddFriend'>
                    <FaPlus style={style} />
                </button>
            </div>
        </div>
        
    );
};

export default UserResultSearch;