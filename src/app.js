import Taro, { Component } from '@tarojs/taro'

import './app.less'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/coming-soon/index',
      'pages/my-music/index',
      'pages/user-center/index',
      'pages/user-setting/index',
      'pages/user-message/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '我的时光网',
      navigationBarTextStyle: 'black'
    }
  }

  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
