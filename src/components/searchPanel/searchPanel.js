import React, {Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component{
    render() {
        return (
            <div className="search-block d-flex flex-justify-start flex-auto width-full my-4" role="search">
                <details className="details details-reset details-overlay subnav-search-context" id="filters-select-menu">
                    <summary className="btn btn-filter" aria-haspopup="menu" role="button">
                        Filters
                        <span className="dropdown-caret"></span>
                    </summary>
                    <details-menu className="SelectMenu" role="menu">
                        <div className="SelectMenu-modal">
                            <div className="SelectMenu-list">
                                <strong className="SelectMenu-item" role="menuitem">
                                    Filter Issues
                                </strong>
                                <a className="SelectMenu-item" role="menuitem"
                                   href="#">
                                    Open issues and pull requests
                                </a>
                                <a className="SelectMenu-item" role="menuitem"
                                   href="#">
                                    Your issues
                                </a>
                                <a className="SelectMenu-item" role="menuitem"
                                   href="#">
                                    Your pull requests
                                </a>
                                <a className="SelectMenu-item" role="menuitem"
                                   href="#">
                                    Everything assigned to you
                                </a>
                                <a className="SelectMenu-item" role="menuitem"
                                   href="#">
                                    Everything mentioning you
                                </a>
                                <a className="SelectMenu-item" role="menuitem"
                                   href="https://help.github.com/articles/searching-issues" target="_blank">
                                    <svg className="octicon octicon-link-external mr-2" viewBox="0 0 12 16"
                                         version="1.1" width="12" height="16" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"></path>
                                    </svg>
                                    <strong>View advanced search syntax</strong>
                                </a>
                            </div>
                        </div>
                    </details-menu>
                </details>
                <form className="subnav-search" data-pjax="true" role="search" aria-label="Issues"
                      action="" accept-charset="UTF-8" method="get">
                    <input type="text"
                           className="form-control"
                           placeholder="Search all issues" />
                    <svg className="octicon octicon-search subnav-search-icon" viewBox="0 0 16 16" version="1.1"
                         width="16" height="16" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path>
                    </svg>
                </form>


            </div>
    );
    }
    }