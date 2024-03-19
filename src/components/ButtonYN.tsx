import './ButtonYN.scss';

export interface Props {
    content: string;
}
const ButtonYn = ({content}: Props) => {
    return (
        <button className='button-yn'>
            <p>{content}</p>
        </button>
    );
};

export default ButtonYn;