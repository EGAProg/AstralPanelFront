import React from "react";
import History from "./History/History.jsx";
import Developers from "./Developers/Developers.jsx";
import style from "./Body.module.css";
const Body = () => {
    return (
        <>
            <h2 className={style.h2}>History</h2>
            <History />
            <h2 className={style.h2}>Developers List</h2>
            <Developers />
        </>
    );
}

export default Body;