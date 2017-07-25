/**
 * Created by 10343 on 2017/7/15.
 */
import React from 'react'
import {Link} from 'react-router'
import {
    Icon
    , Form
    , Input
    , Button
    , Modal
    , Tabs
    , message
} from 'antd'
import '../../css/mobile.css'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;


class MobileHeader extends React.Component {
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            current: "top",//默认显示头条
            modalShow: false,//默认弹窗不显示
            hasLogin: true,//是否登录
            userNickName: 'admin',//用户名
            userId: 0,//用户id
            action: 'login'
        };
    }

// 切换导航选项卡
    handleClick = (e) => {
        // 如果点击登录注册要弹出对话框
        if (e.key === 'register') {
            this.setState({
                modalShow: true,
                current: e.key,
            });
        }
        else {
            this.setState({
                current: e.key,
            });
        }
    };
// 单击对话框ok
    handleOk = (e) => {
        this.setState({
            modalShow: false,
        });
    };
// 单击对话框取消
    handleCancel = (e) => {
        this.setState({
            modalShow: false,
        });
    };
// 切换选项卡片时选择登录or注册
    callback = (key) => {

        if (key === '1') {
            this.setState({
                action: 'login'
            })
        }
        else {
            this.setState({
                action: 'register'
            })
        }
    };
// 提交表单
    handleSubmit = (e) => {
        // 页面开始向api提交数据
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
                    + "&username=" + values.userName + "&password=" + values.password
                    + "&r_userName=" + values.r_userName + "&r_password="
                    + values.r_password + "&r_confirmPassword="
                    + values.r_confirmPassword, myFetchOptions)
                    .then(response => response.json())
                    .then(json => {
                        this.setState({userNickName: json.NickUserName, userid: json.UserId});
                    });
                if (this.state.action === "login") {
                    this.setState({hasLogin: true});
                }

                message.success("请求成功！");
                this.setState({
                    modalShow: false,
                })
            }
        });
    };
// 退出登录
    logout = () => {
        localStorage.userid = '';
        localStorage.userNickName = '';
        this.setState({hasLogin: false});
    };
    //点击登录弹窗
    login = () => {
        this.setState({
            modalShow: true,
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogin
            ?
            <Link to="/test">
                <Icon type="user"/>
            </Link>
            :
            <Icon type="setting" onClick={this.login}/>;
        return (
            <div id="mobileheader">
                <header>
                    <Link to="/"><img src={require('../../images/logo.png')} alt="logo"/>
                        <span>ReactNews</span>
                    </Link>
                    {userShow}
                </header>
                <Modal
                    title="注册/登录"
                    visible={this.state.modalShow}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {/*defaultActiveKey：默认选项版， callback：切换面板调用的函数*/}
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="登录" key="1">
                            <Form layout='horizontal' onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">

                                    {getFieldDecorator('userName')(
                                        <Input prefix={<Icon type="user"/>}
                                               placeholder="请输入您的账号"/>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('password')(
                                        <Input prefix={<Icon type="lock"/>}
                                               placeholder="请输入您的密码" type='password'/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form layout='horizontal' onSubmit={this.handleSubmit}>
                                <FormItem label="账户">

                                    {getFieldDecorator('r_userName')(
                                        <Input prefix={<Icon type="user"/>}
                                               placeholder="请输入您的账号"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password')(
                                        <Input prefix={<Icon type="lock"/>}
                                               placeholder="请输入您的密码" type='password'/>
                                    )}
                                </FormItem>
                                <FormItem type='password' label="确认密码">
                                    {getFieldDecorator('r_confirmPassword')(
                                        <Input prefix={<Icon type="lock"/>}
                                               placeholder="请确认您的密码" type='password'/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default MobileHeader = Form.create({})(MobileHeader);
