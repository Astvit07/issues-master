import React, {Component} from "react";
import './app.css';


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
                                <h4>
                                    Question: How to set ripple color for lconButton?
                                </h4>
                                <span className="tally">Question</span>
                            </div>
                            <div className="box-data">
                                #616 opened 15 hours ago by mam
                            </div>
                        </div>
                        <div className="section-notification">
                            <i className="fa fa-comment"></i>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

