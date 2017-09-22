import React from 'react'
import {Tabs, Card, Upload, Icon, Modal} from 'antd'

const TabPane = Tabs.TabPane;
export default class MobileUserCenter extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            comments: '',
            collections: '',
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],//已经上传的文件列表
        };
    }

    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        };
        if (sessionStorage.userId) {

            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + sessionStorage.userId, myFetchOptions)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        comments: json
                    })
                }).catch((err) => {
                console.log(err);
            });
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + sessionStorage.userId, myFetchOptions)
                .then(response => response.json())
                .then(json => {
                    this.setState({
                        collections: json
                    })
                }).catch((err) => {
                console.log(err);
            })
        }
    }

    handleCancel = () => this.setState({
        previewVisible: false
    });

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });

    };

    handleChange = ({fileList}) => this.setState({
        fileList
    });

    render() {
        const {
            previewVisible,
            previewImage,
            fileList,
            comments,
            collections,
        } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        //评论列表
        const commentsList = comments.length ?
            comments.map((comment, index) => (
                    <Card key={index} title={` ${comment.datetime} 评论了文章 ${comment.uniquekey}`}
                          extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                        <p>{comment.Comments}</p>
                    </Card>
                )
            )

            :
            '还没有评论任何新闻';

        //收藏列表
        const collectionsList = collections.length ?
            collections.map((collection, index) => (
                    <Card key={index} title={<a target="_blank"
                                                href={`/#/details/${collection.uniquekey}`}>收藏了《 {collection.Title}》</a>}>
                    </Card>
                )
            )

            :
            '还没有收藏任何新闻';

        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我的收藏" key="1">
                        {collectionsList}
                    </TabPane>
                    <TabPane tab="我的评论" key="2">
                        {commentsList}
                    </TabPane>
                    <TabPane tab="我的头像" key="3">
                        <Upload
                            action="//jsonplaceholder.typicode.com/posts/"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {fileList.length >= 3 ? null : uploadButton}
                        </Upload>
                        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                            <img alt="example" style={{width: '100%'}} src={previewImage}/>
                        </Modal>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}