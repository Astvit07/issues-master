import React from "react";

const RelativeTime = ({time}) =>{
    return (
        <relative-time datetime={time}
                       className="no-wrap"
                       title={time}>
             {time} 
        </relative-time>
    );
}

export default RelativeTime;