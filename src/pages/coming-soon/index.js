import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import BottomTab from "../components/bottom-tab"
import MovieUnShowItem from '../components/movie-unShow-item'
import './index.less'

export default class HotShowing extends Taro.Component {
    config = {
        navigationBarTitleText: '即将上映'
    }

    constructor() {
        super(...arguments)
        this.state = {
            movieData: [],
            currentTab: 1,
        }
    }

    componentDidMount() {
        Taro.request({
            url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api',
            data: {
                locationId: 290
            },
            header: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                this.setState({
                    movieData: res.data.moviecomings
                })
            })
    }

    render() {
        return (
            <View className='page'>
                <View className='page-top'>
                </View>
                <View className='page-main'>
                    <MovieUnShowItem data={this.state.movieData}></MovieUnShowItem>
                </View>
                <View className='page-bottom'>
                    <BottomTab tab={this.state.currentTab}></BottomTab>
                </View>
            </View>
        )
    }
}