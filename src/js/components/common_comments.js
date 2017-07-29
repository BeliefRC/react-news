import React from 'react'
import {Card, Form, Input, Button, Row, Col, message} from 'antd'
import '../../css/common_comments.css'

const FormItem = Form.Item;

class CommonComments extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            comments: ''
        };
    }

    componentDidMount() {
        const myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    comments: json.reverse()
                })
            })
    }

    info = () => {
        message.info('评论成功!');
    };
    errorInfo = () => {
        message.info('请先登录!');
    };
    collectInfo = () => {
        message.info('收藏成功!');
    };


    handleSubmit(e) {
        // 页面开始向api提交数据
        e.preventDefault();
        if (!localStorage.userId) {
            this.errorInfo();
            return false
        }
        else {
            const myFetchOptions = {
                method: 'GET'
            };
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userId + "&uniquekey=" + this.props.uniquekey + "&commnet=" + values.remark, myFetchOptions)
                        .then(response => response.json())
                        .then(json => {
                            this.componentDidMount();
                            this.info()
                        })

                }
            });
        }
    }

    addUserCollection = () => {
        if (!localStorage.userId) {
            this.errorInfo();
            return false
        }
        else {
            let myFetchOptions = {
                method: 'GET'
            };
            fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userId + "&uniquekey=" + this.props.uniquekey, myFetchOptions)
                .then(response => response.json())
                .then(json => {
                    //收藏成功以后进行一下全局的提醒
                    this.collectInfo()
                });
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const styleTxt = {
            width: '100%',
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
        };
        const commentList = comments.length
            ?
            comments.map((comment, index) => (
                    <Card key={index} title={comment.UserName} extra={<a href="/"> 发布于 {comment.datetime} </a>}
                          className="comment-card">
                        <p style={styleTxt}>
                            {comment.Comments}
                        </p>
                    </Card>
                )
            )
            :
            "没加载到任何评论";
        return (
            <div className="comment-area">
                <Row>
                    <Col span={24}>
                        <hr/>
                        <h2>网友评论仅供其表达个人看法，并不表明官方立场</h2>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark')(
                                    <Input className="comment-text" type="textarea"
                                           placeholder="说点什么吧" {...getFieldDecorator('remark', {initialValue: ''})}/>
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            <Button type="primary" className="collect" onClick={this.addUserCollection}>收藏文章</Button>
                        </Form>
                        {commentList}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CommonComments = Form.create({})(CommonComments);
