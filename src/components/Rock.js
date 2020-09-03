import React from "react";
// import 'Rock.css';
import { ReactComponent as Sun } from '../img/sun.svg';
import { ReactComponent as Moon } from '../img/moon.svg';

const Rock = ({ type, theme }) => {
    if (type === "sun") {
        const className = `Sun ${theme}`;
        return <Sun className={className}/>
    } else if (type === "moon") {
        return <Moon className="Moon"/>
    }
}

export default Rock