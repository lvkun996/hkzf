import React , { Component }   from 'react'

import { Route } from 'react-router-dom'

import Index from './Component/Index'
import House from '../House'
import Profile from '../Profile'
import './index.scss'
import { TabBar } from 'antd-mobile';

const tabItems = [
    {
      title: '首页',
      path: '/home',
      icon: 'icon-ind'
    },
    {
      title: '找房',
      path: '/home/house',
      icon: 'icon-findHouse'
    },
    {
      title: '我的',
      path: '/home/profile',
      icon: 'icon-my'
    },
  ]


class Home extends Component {
    state = {
        selectedTab: this.props.location.pathname,
      };
    render () {
        console.log(this.props);
        return (
            <div className="home">
                {/* {二级路由配置} */}
                <Route path="/home" exact component={Index}></Route>
                <Route path="/home/house" component={House}></Route>
                <Route path="/home/profile" component={Profile}></Route>
                {/* {底部菜单} */}
                <div className="barBox">
                    <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    >
                    {
                        tabItems.map ( item => {
                            return (
                                <TabBar.Item
                                  title={item.title}
                                  key={item.title}
                                  icon={ <i className={`iconfont ${item.icon}`} />}
                                  selectedIcon={ <i className={`iconfont ${item.icon}`} />}
                                  selected={this.state.selectedTab ===  item.path }
                                  onPress={() => {
                                  this.props.history.push( item.path)
                                  this.setState({
                                      selectedTab:  item.path,
                                  });
                                  }}
                                  data-seed="logId"
                                >
                                </TabBar.Item>
                            )
                        })
                    }
                
                    
                    </TabBar>
                </div>
            </div>
            
        )
    }
}

export default Home