import React from "react";
import SvgComment from "../SVG/SvgComment";

const NotificationComments = ({comment, link}) =>{
    if (comment){
        return(
            <a href={link}>
                           <span>
                                <SvgComment />
                           </span>
                <span> {comment}</span>
            </a>
        )
    }
    else return <span></span>;
}

export default NotificationComments;