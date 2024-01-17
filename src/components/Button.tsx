const Button = ({count, setCount}) => {
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
};

export default Button;