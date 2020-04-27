import React, {Component} from "react";
import './app.css';
import Tally from "../tally/tally";


export default class App extends Component {
    render() {
        return (
            <main className="container">
                <div className="input-group my-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary dropdown-toggle" type="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            <div role="separator" className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                </div>
                {/*+++---+++*/}
                <div className="todo-list-wrapper">
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
                </div>
            </main>
        );
    }
}

