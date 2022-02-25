import { useState, useEffect } from "react";


const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(true);

    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setIsPending(false);
            })
    }, [url]);

    return {data, setData, isPending, setIsPending};
}

export default useFetch;