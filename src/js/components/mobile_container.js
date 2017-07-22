import React from 'react'
import {Tabs, Carousel} from 'antd';
import MobileNewsList from './mobile_news_list'
import '../../css/mobile_container.css'

const TabPane = Tabs.TabPane;
export default class MobileContainer extends React.Component {
    render() {
        return (
            <div className="container">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="头条" key="1">
                        <div className="carousel">
                            <Carousel autoplay>
                                <div><img src={require('../../images/carousel_1.png')} alt=""/></div>
                                <div><img src={require('../../images/carousel_2.png')} alt=""/></div>
                                <div><img src={require('../../images/carousel_3.png')} alt=""/></div>
                                <div><img src={require('../../images/carousel_4.png')} alt=""/></div>
                            </Carousel>
                        </div>
                        <MobileNewsList type="top" count={20}/>
                    </TabPane>

                    <TabPane tab="社会" key="2">

                    </TabPane>
                    <TabPane tab="国内" key="3">

                    </TabPane>
                    <TabPane tab="国际" key="4">

                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
