import React, { useEffect, useState } from "react";
import axios from "axios";
import HistoryList from "./HistoryList/HistoryList";
const History = () => {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        const fetchHistoryData = async () => {
        try {
            const response = await axios.get('http://localhost:5036/api/History');
            setHistories(response.data.$values);
        } catch (error) {
            console.error('Error fetching history data:', error);
        }
        };

        fetchHistoryData();
    }, []);

    return (
        <>
            <HistoryList histories={histories} />
        </>
    );
}

export default History;