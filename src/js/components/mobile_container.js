import React from 'react'
import {Tabs, Carousel, Spin} from 'antd';
import MobileNewsList from './mobile_news_list'
import '../../css/mobile_container.css'

const TabPane = Tabs.TabPane;

class AddNewsList extends React.Component {
    render() {
        return (
            <div>
                <Spin/>
            </div>
        )
    }
}

export default class MobileContainer extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            newsCount: 20
        };
    }

    getInitialState() {
        return {
            newsCount: 20
        }
    }

    componentDidMount() {
        let _this = this;
        window.addEventListener('scroll', function () {
            //计算滚动条到底部的距离
            let totalHeight = document.body.scrollHeight;  //元素的总高度
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;   //被隐藏上方像素
            let clientHeight = document.documentElement.clientHeight;   //浏览器视口高度
            let bottom = totalHeight - scrollTop - clientHeight;
            if (bottom < 1) {
                _this.setState({
                    newsCount: 30
                })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="头条" key="1" id="top">
                        <div className="carousel">
                            <Carousel autoplay>
                                <div><img src={require('../../images/carousel_1.png')} alt=""/></div>
                                <div><img src={require('../../images/carousel_2.png')} alt=""/></div>
                                <div><img src={require('../../images/carousel_3.png')} alt=""/></div>
                                <div><img src={require('../../images/carousel_4.png')} alt=""/></div>
                            </Carousel>
                        </div>
                        <div className="first_list">
                            <MobileNewsList type="top" count={this.state.newsCount}/>
                        </div>
                        <AddNewsList/>
                    </TabPane>

                    <TabPane tab="社会" key="2">
                        <MobileNewsList type="shehui" count={20}/>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileNewsList type="guonei" count={20}/>

                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileNewsList type="guoji" count={20}/>

                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileNewsList type="yule" count={20}/>

                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
