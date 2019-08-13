import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import BottomTab from "../components/bottom-tab"
import MovieShowingItem from '../components/movie-showing-item'
import './index.less'

export default class HotShowing extends Taro.Component {
    config = {
        navigationBarTitleText: '正在热映'
    }

    constructor() {
        super(...arguments)
        this.state = {
            movieData: [],
            currentTab: 0,
        }
    }

    componentDidMount() {
        Taro.request({
            url: 'https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api',
            method: "GET",
            data: {
                locationId: 290
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
            <View className='page'>
                <View className='page-top'>
                </View>
                <View className='page-main'>
                    <MovieShowingItem data={this.state.movieData}></MovieShowingItem>
                </View>
                <View className='page-bottom'>
                    <BottomTab tab={this.state.currentTab}></BottomTab>
                </View>
            </View>
        )
    }
}
