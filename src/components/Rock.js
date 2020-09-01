import React from "react";
import { ReactComponent as Sun } from '../img/sun.svg';
import { ReactComponent as Moon } from '../img/moon.svg';

const Rock = ({ type }) => {
    if (type === "sun") {
        return <Sun />
    } else if (type === "moon") {
        return <Moon />
    }
}

export default Rock