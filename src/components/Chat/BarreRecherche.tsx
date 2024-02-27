import { useState } from 'react';
import './BarreRecherche.scss';
import {IoIosSearch} from "@react-icons/all-files/io/IoIosSearch";


const BarreRecherche: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const style = {color: "grey"};
    
    return (
        <div className="div">
            <div className='addFriend'>
                <IoIosSearch style={style} />            
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Ajouter un ami" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            <p>{inputValue}</p>
        </div>
    );
};
export default BarreRecherche;