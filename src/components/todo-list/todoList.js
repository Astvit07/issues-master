import React, {Component} from "react";
import './todo-list.css';
import GitHubApiService from "../../services/GitHubApi-services";
import Tally from "../tally/tally";

export default class TodoList extends Component {
    gitHubApi = new GitHubApiService();
    state = {
        issuesList: []
    };

    componentDidMount() {
        this.gitHubApi
            .getAllIssues()
            .then((issuesList) => {
                this.setState({
                    issuesList: issuesList
                })
            })
    }

    renderIssuesItem(arr) {
        return arr.map((info) => {
            return (
                <div className="issues-box">
                    <div className="section-icon-status">
                        <span className={info.state + ' icon'} aria-label="Open issue">
                            <svg className="octicon octicon-issue-opened open"
                                 viewBox="0 0 14 16" version="1.1" width="14" height="16"
                                 aria-hidden="true"><path fill-rule="evenodd"
                                                          d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
                         </span>
                    </div>
                    <div className="section-content">
                        <div className="box-title">
                            <a href={info.html_url}>
                                {info.title}
                            </a>
                        </div>
                        <div className="box-data">
                            {info.number} opened

                            <relative-time datetime={info.created_at} className="no-wrap"
                                           title="15 апр. 2020 г., 10:51 GMT+3">
                                {info.created_at}
                            </relative-time>

                            by {info.user.login}
                        </div>
                    </div>
                    <div className="section-notification">
                        <a href={info.comments_url}>
                           <span>
                               <svg className="octicon octicon-comment v-align-middle" viewBox="0 0 16 16" version="1.1"
                                    width="16" height="16" aria-hidden="true"><path fill-rule="evenodd"
                                                                                    d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>
                           </span>
                          {/*  <span>
                               <svg className="octicon octicon-git-pull-request open" viewBox="0 0 12 16" version="1.1"
                                    width="12" height="16" aria-hidden="true"><path fill-rule="evenodd"
                                                                                    d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0010 15a1.993 1.993 0 001-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 00-1 3.72v6.56A1.993 1.993 0 002 15a1.993 1.993 0 001-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                            </span>*/}
                            <span> {info.comments}</span>
                        </a>
                    </div>
                </div>
            );
        })
    }

    render() {
        const {issuesList} = this.state
        const items = this.renderIssuesItem(issuesList)
        return (
            <div className="issues-wrapper">
                {items}
                <Tally variant={'question'} text={'question'}/>
                <Tally variant={'fixed'} text={'Fixed in Upcoming Release'}/>
            </div>
        );
    }
}

