import React, {Component} from "react";
import './app.css';
import Tally from "../tally/tally";
import TodoList from "../todo-list/todoList";


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
                <TodoList />
                {/*+++---+++*/}
                <Tally variant={'question'} text={'Hello world'} />
            </main>
        );
    }
}


