import Message from "../components/Messages/Message.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

const MessagesPage = () => {
    const fakeApiUrl = "https://dummyjson.com/products?limit=10";
    const [data, setData] = useState<any>();
    useEffect(() => {
        axios.get(fakeApiUrl).then((res) => setData(res.data.products));
    }, []);
    return (
        <div>
            {data?.map((item) => (
                <Message data={item}/>
            ))}
        </div>
    );
};

export default MessagesPage;
