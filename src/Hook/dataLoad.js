import { useEffect, useState } from "react";

const useData = () => {

    const [items, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`https://dry-spire-70465.herokuapp.com/list`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, []);

    return [items, setItem];
}

export default useData;