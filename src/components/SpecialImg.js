import React from "react";
import { ReactComponent as Volcano } from '../img/volcano.svg';
import { ReactComponent as Tornado } from '../img/tornado.svg';

const SpecialImg = ({ type }) => {
    switch(type) {
        case "tornado":
            return <Tornado className={type}/>
        case "volcano":
            return <Volcano className={type}/>
      }
}

export default SpecialImg