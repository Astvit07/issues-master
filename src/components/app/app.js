import React, {Component} from "react";
import './app.css';
import Tally from "../tally/tally";
import IssuesList from "../issues-list/issuesList";
import SearchPanel from "../searchPanel/searchPanel";

export default class App extends Component {
    render() {
        return (
            <main className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <SearchPanel />
                        {/*+++---+++*/}
                        <IssuesList/>
                    </div>
                </div>

                {/*+++---+++*/}
                <Tally variant={'question'} text={'Hello world'}/>
            </main>
        );
    }
}


