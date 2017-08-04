import React from 'react'
import {BackTop} from 'antd'
import CommonComments from '../components/common_comments'
import '../../css/mobile_news_details.css'

export default class MobileNewsDetails extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            newsItem: ''
        };
    }

    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    newsItem: json
                });
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";

            })
    }

    getNewsItem() {
        return {__html: this.state.newsItem.pagecontent}
    }

    render() {
        return (
            <div className="details_container">
                <div className="item_article" dangerouslySetInnerHTML={this.getNewsItem()}/>
                <CommonComments uniquekey={this.props.params.uniquekey}/>
                <BackTop/>
            </div>
        )
    }
}
