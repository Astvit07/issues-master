import React from "react";
import './issues-list-item.css';
import Tally from "../tally/tally";

const IssuesListItem = () => {
    return (
        <div className="todo-list-item">
            <div className="section-icon-status">
                <i className="fa fa-exclamation-circle"></i>
            </div>
            <div className="section-content">
                <div className="box-title">
                    <a href="#">
                        <h4>
                            Question: How to set ripple color for lconButton?
                        </h4>
                    </a>
                    <Tally variant={'question'} text={'question'}/>
                    <Tally variant={'fixed'} text={'Fixed in Upcoming Release'}/>
                </div>
                <div className="box-data">
                    #616 opened 15 hours ago by mam
                </div>
            </div>
            <div className="section-notification">
                <button type="button" className="btn custom ">
                    <i className="fa fa-comment"></i>
                </button>
                <span>5</span>
            </div>
        </div>
    );
}

export default IssuesListItem;