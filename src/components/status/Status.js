import React from "react";
import SvgIssueOpened from "../SVG/SvgIssueOpened";
const Status = ({state}) =>{
    if(state === 'open')
    return(
        <span className={state + ' icon'} aria-label={state + ' issue'}>
            <SvgIssueOpened />
        </span>
    );
    else return <span>ok</span>
}
export default Status;