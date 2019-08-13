import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { AtIcon, AtAvatar, AtList, AtListItem } from "taro-ui"
import BottomTab from "../components/bottom-tab"

import avatarImage from '../../assets/images/avatar.jpg'
import './index.less'
import { userInfo } from 'os';

export default class UserCenter extends Taro.Component {
    config = {
        navigationBarTitleText: '个人中心',
        backgroundTextStyle: '#EEEFF1',
    }

    constructor() {
        super(...arguments)
        this.state = {
            code: '',
            currentTab: 3,
            infos: ''
        }
    }

    showSettings() {
        Taro.navigateTo({
            url: `/pages/user-setting/index`
        })
    }

    //获取用户信息
    getUserinfo() {
        Taro.getUserInfo({
            success: function (res) {
                console.log(res.userInfo)
                this.state.infos = res.userInfo;
            },
            fail: function (res) {
                console.log('获取用户信息失败')
                console.log(res)
            }
        }
        );
    }
    showMessages() {
        Taro.navigateTo({
            url: `/pages/user-message/index`
        })
    }
    componentWillMount() {
        Taro.login().then(res => {
            if (res.errMsg == "login:ok") {
                this.setState({
                    code: res.code
                })
            }
        });

    }
    componentDidMount() {
        this.getUserinfo()
    }
    handleClick = (name) => {
        console.log(name)
    }

    render() {
        const infos = this.state.infos;
        const name = infos.nickName ? infos.nickName : '点击登录';
        return (
            <View className='user-center'>
                <View className='user-center-top'>
                    <View className='user-settings'>
                        <AtIcon className='user-icon-right' value='bell' size='24' color='#999' onClick={this.showMessages.bind(this)}></AtIcon>
                        <AtIcon className='user-icon-right settings' value='settings' size='24' color='#999' onClick={this.showSettings.bind(this)}></AtIcon>
                        <Text className='clearfix'></Text>
                    </View>
                    <View className='user-info gap'>
                        <View className='user-info-avatar'>
                            <AtAvatar circle image={infos.avatarUrl} />
                        </View>
                        <View className='user-info-detail'>
                            <AtList className='gap' hasBorder={false}>
                                <AtListItem title={name} note={infos.city} hasBorder={false} />
                            </AtList>
                        </View>
                    </View>
                </View>

                <View className='user-center-list'>
                    <AtList className='gap' hasBorder={false}>
                        <AtListItem title='时光商城' arrow='right' onClick={this.handleClick.bind(this)} />
                        <AtListItem title='电影票订单' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='商品订单' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='购物车' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='会员俱乐部' extraText='签到抽好礼' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='我的活动' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='直播' arrow='right' hasBorder={false} onClick={this.handleClick} />
                    </AtList>
                </View>
                <View className='bottom-tab'>
                    <AtList className='gap' hasBorder={false}>
                        <AtListItem title='客服/反馈' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='基本设置' arrow='right' onClick={this.handleClick} />
                        <AtListItem title='关于项目' arrow='right' hasBorder={false} onClick={this.handleClick} />
                    </AtList>
                </View>
                <View>
                    <BottomTab tab={this.state.currentTab}></BottomTab>
                </View>
            </View>
        )
    }
}
