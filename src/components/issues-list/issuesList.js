import React, {Component} from "react";
import './issues-list.css';
import GitHubApiService from "../../services/GitHubApi-services";
import Tally from "../tally/tally";
import Status from "../status/Status";
import NotificationComments from "../notificationComments/NotificationComments";
import NotificationPull from "../notificationPull/NotificationPull";
import RelativeTime from "../relativeTime/RelativeTime";

export default class IssuesList extends Component {
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
                        <Status state={info.state}/>
                    </div>
                    <div className="section-content">
                        <div className="box-title">
                            <a href={info.html_url}>
                                {info.title}
                            </a>
                        </div>
                        <div className="box-data">
                            {info.number} opened

                            <RelativeTime time={info.updated_at} />

                            by <a href={info.user.html_url}>{info.user.login}</a>
                        </div>
                    </div>
                    <div className="section-notification justify-content-between">
                        <NotificationPull link={info.pull_request}/>
                        <NotificationComments comment={info.comments} link={info.comments_url}/>
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

