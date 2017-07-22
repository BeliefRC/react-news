import React from 'react'
import {Card} from 'antd'
import {Link} from 'react-router'

export default class PCNewsImagesBlock extends React.Component {
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
        const styleH3 = {
             width:'100px',
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            margin: '3px auto'
        };

        const {news} = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index) => (
                    <div className="images-block-item" key={index}>
                        <Link to={`details/${newsItem.uniquekey}`} target='_blank'>
                            <div className="custom-image">
                                <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                            </div>
                            <div className="custom-card">
                                <h3 style={styleH3}>{newsItem.title}</h3>
                                <p style={{textAlign:'center'}}>{newsItem.author_name}</p>
                            </div>
                        </Link>
                    </div>

            ))
            :
            '没加载到任何新闻';
        return (
            <div className="images-block">
                <Card title={this.props.cartTitle}>
                    {newsList}
                </Card>
            </div>
        )
    }
}
