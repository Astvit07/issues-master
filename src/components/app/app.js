import React, {Component} from "react";
import './app.css';
import Tally from "../tally/tally";
import TodoList from "../todo-list/todoList";
import SearchBlock from "../searchBlock/searchBlock";

export default class App extends Component {
    render() {
        return (
            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <SearchBlock />
                        {/*+++---+++*/}
                        <TodoList/>
                    </div>
                </div>

                {/*+++---+++*/}
                <Tally variant={'question'} text={'Hello world'}/>
            </main>
        );
    }
}


