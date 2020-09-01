import React from "react";
import { ReactComponent as Bolt } from '../img/bolt-1.svg';
import { ReactComponent as DoubleBolt } from '../img/bolt-2.svg';

const Lightning = ({ bolts }) => {
    if (bolts === 1) {
        return <Bolt className="Lightning"/>
    } else if (bolts === 2) {
        return <DoubleBolt className="Lightning"/>
    }
}

export default Lightning