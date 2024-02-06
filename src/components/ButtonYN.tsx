import './ButtonYN.scss';

const ButtonYn = ({content}) => {
    return (
        <button className='button-yn'>
            {content}
        </button>
    );
};

export default ButtonYn;