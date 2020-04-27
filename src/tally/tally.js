import React from "react";
import './tally.css';

const Tally = ({variant,text}) =>{
    return(
        <span className={"tally " + '-' + variant}>{text}</span>
    );
}
export default Tally;