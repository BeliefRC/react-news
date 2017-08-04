import React from 'react'
import {Row, Col, BackTop} from 'antd'
import PCNewsImagesBlock from '../components/pc_news_images_block'
import CommonComments from '../components/common_comments'
import '.././../css/pc_news_details.css'

export default class PCNewsDetails extends React.Component {
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
            <div>
                <Row>
                    <Col span={2}/>
                    <Col span={16}>
                        <div className="item_article" dangerouslySetInnerHTML={this.getNewsItem()}/>
                        <CommonComments uniquekey={this.props.params.uniquekey}/>
                    </Col>
                    <Col span={4}>
                        <PCNewsImagesBlock cartTitle="新闻头条" type="top" count={18}/>

                    </Col>
                    <Col span={2}/>
                </Row>
                <BackTop/>
            </div>
        )
    }
}
