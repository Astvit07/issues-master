import React from "react";
import './todo-list-item.css';
import Tally from "../tally/tally";

const TodoListItem = () => {
    return (
        <span>
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
            <div className="todo-list-item">
        <div className="section-icon-status">
            <i className="fa fa-exclamation-circle"></i>
        </div>
        <div className="section-content">
            <div className="box-title">
                <a href="#">
                    <h4>
                        Migration to v6 broke the SASS compilation
                    </h4>
                </a>
            </div>
            <div className="box-data">
                #615 opened 4 days ago by BenMoreton
            </div>
        </div>
        <div className="section-notification">
            <button type="button" className="btn custom ">
                <i className="fa fa-comment"></i>
            </button>
            <span>5</span>
        </div>
    </div>
            <div className="todo-list-item">
        <div className="section-icon-status">
            <i className="fa fa-exclamation-circle"></i>
        </div>
        <div className="section-content">
            <div className="box-title">
                <a href="#">
                    <h4>
                        Navigation Drawer List Item Icon color doesn't use theme color when in active
                        state,
                        differs from the text color.
                        <Tally variant={'fixed'} text={'Fixed in Upcoming Release'}/>

                    </h4>
                </a>
            </div>
            <div className="box-data">
                #602 opened 17 days ago by kintz09
            </div>
        </div>
        <div className="section-notification">
            <button type="button" className="btn custom ">
                <i className="fa fa-comment"></i>
            </button>
            <span>5</span>
        </div>
    </div>
        </span>

    );
}

export default TodoListItem;