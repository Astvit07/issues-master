import React from "react";
import SvgPull from "../SVG/SvgPull";

const NotificationPull = ({link}) => {
    if (link) {
        return(
            <SvgPull />
        );
    }
    else return <span> </span>
}

export default NotificationPull;