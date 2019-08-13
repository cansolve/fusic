import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import BottomTab from "../components/bottom-tab"

export default class Mymusic extends Taro.Component {
    config = {
        navigationBarTitleText: '我的音乐',
        backgroundTextStyle: '#EEEFF1',
    }
    constructor() {
        super(...arguments)
        this.state = {
            currentTab: 2
        }
    }
    componentDidMount() {
        Taro.request({
            url: 'https://v1.itooi.cn/netease/song',
            method: "GET",
            data: {
                id: 37239038
            },
            header: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                this.setState({
                    movieData: res.data.movies
                })
            })
    }
    render() {
        return (
            <View className='user-center'>
               music
               <View>
                    <BottomTab tab={this.state.currentTab}></BottomTab>
                </View>
            </View>
        )
    }
}
