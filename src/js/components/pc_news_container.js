import React from 'react'
import {Row, Col, Carousel, Tabs} from 'antd'
import PCNewsList from './pc_news_list'
import PCNewsImagesBlock from './pc_news_images_block'
import PCProducts from './pc_products'
import '../../css/pc_container.css'

const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {


    render() {
        return (
            <div className="container">
                <Row>
                    <Col span={2}/>
                    <Col span={20}>
                        <div className="left-container">
                            <div className="carousel">
                                <Carousel autoplay>
                                    <div><img src={require('../../images/carousel_1.png')} alt=""/></div>
                                    <div><img src={require('../../images/carousel_2.png')} alt=""/></div>
                                    <div><img src={require('../../images/carousel_3.png')} alt=""/></div>
                                    <div><img src={require('../../images/carousel_4.png')} alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImagesBlock className="left_images_block" type="guoji" count={6} cartTitle="国际头条"/>
                        </div>
                        <div className="tabs_news">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="头条新闻" key="1"><PCNewsList type='top' count={20}/></TabPane>
                                <TabPane tab="国际新闻" key="2"><PCNewsList type='guoji' count={20}/></TabPane>
                            </Tabs>
                        </div>
                        <PCProducts/>
                        <PCNewsImagesBlock cartTitle="社会头条" type="shehui" count={22}/>
                        <PCNewsImagesBlock cartTitle="娱乐头条" type="yule" count={22} />

                    </Col>
                    <Col span={2}/>
                </Row>
            </div>
        )
    }
}
