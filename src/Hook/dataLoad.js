import { useEffect, useState } from "react";

const useData = () => {

    const [items, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/list`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    return [items, setItem];
}

export default useData;