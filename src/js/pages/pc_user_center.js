import React from 'react'
import {Tabs, Card, Upload, Icon, Modal} from 'antd'

const TabPane = Tabs.TabPane;
export default class PCUserCenter extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
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
            fileList
        } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus"/>
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="我的收藏" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="我的评论" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="我的头像" key="3">
                        <div className="clearfix">
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
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}


