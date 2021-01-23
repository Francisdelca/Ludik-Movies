import React from 'react';
import Styles from "../styles/moreResults.module.css";
import { IoReload } from "react-icons/io5";

const MoreResults = ({action}) => {
    return (
        <div className={Styles.MoreResults} onClick={() => action()}>
            <IoReload size={40}/>
            <span> More Movies</span>
        </div>
    );
}

export default MoreResults;