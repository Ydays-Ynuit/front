import useFetch from "../../hooks/useFetch.ts";

const ChatMessage = () => {
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

    if (error) console.log(error);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default ChatMessage;
