import {useState, useEffect} from 'react'
import {Root} from "../mainPage/interface"


const Fetch = (url:any) => {
    const [loading, setLoading] = useState(false);
    const [apiData, setApiData] = useState({});

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data);
        setLoading(true);
    }

    useEffect(() => {
        getData();
    }, []);

  return {apiData, loading}
}

export default Fetch