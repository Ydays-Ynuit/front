import {useEffect, useState} from "react";
import {User} from "../types/User.ts";
import {ApiResponse} from "../types/ApiResponse.ts";
import axios from "axios";

export default function useFetch (url: string): ApiResponse {
    const [data, setData] = useState<User|undefined>();
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async function ():Promise<void> {
            setLoading(true);
            try {
            axios.get(url).then((res) => {
                setData(res.data);
            })
            } catch (err) {
                setError(err);
                throw error;
            } finally {
                setLoading(false);
            }
        })();
    }, [url]);

    return { data, error, loading};
}