import React from 'react'
import {Card, Spin} from 'antd'
import {Link} from 'react-router'

export default class PCNewsList extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {news: ''};
    }

    componentWillMount() {
        let myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count
            , myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({news: json}));
    }

    render() {
        const {news} = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target='_blank'>{newsItem.title}</Link>
                </li>
            ))
            :
            <Spin/>;
        return (
            <div>
                <Card>
                    <ul>
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}
