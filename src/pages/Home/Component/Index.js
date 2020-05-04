import React, { Component } from 'react';
import { Carousel , Flex, Grid } from 'antd-mobile'
import { getSwiper, getGroups } from '../../../api/home'
import { BASE_URL } from '../../../utils/request'

import navImg from '../../../utils/nav_config'

class Index extends Component {
    state = {
        data: [],  // swiper数据
        groupsData: [], // groups数据
        autoplay: false,
        imgHeight: 212,
      }
      componentDidMount() {
        this.loadSwiper()
        this.loadGroups()
      }
    // 初始换swiper数据
      async loadSwiper () {
       const {status, data } =   await getSwiper()
       if ( status === 200 ) {
        this.setState({ data } , () => {
            this.setState({
                autoplay: true
            })
        })
       }
      }
    //   初始化groups数据
      async loadGroups () {
        const {status, data} =  await getGroups()
        if ( status === 200 ) {
            this.setState({
                groupsData: data
            })
        }
      }
    //   渲染swiperi模板
    renderSwiper = () => {
        return this.state.data.map(item => (
            <a
              key={item.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`${BASE_URL}${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                //   用来自适应屏幕的
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))
    }

    // 渲染nav模板
    renderNav = () => {
        return navImg.map ( item => (
                     <Flex.Item key={item.id}>
                       <img src={item.img} alt=""/>
                       <p>{item.title}</p>
                    </Flex.Item>
                ))
    }
    // 渲染租房小组
    renderGroups = () => {
       return <Grid data={this.state.groupsData}
                columnNum={2}
                square={false}
                hasLine={false}
                renderItem={ item => (
                    // item结构
                    <Flex className="grid-item" justify="between">
                        <div className="desc">
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                        </div>
                        <img src={`${BASE_URL}${item.imgSrc}`} alt="" />
                    </Flex>
                    )
                }
            />   
    }

      render() {
        return (
            <div>
                {/* 轮播图 */}
            <Carousel
              autoplay={this.state.autoplay}
              infinite
            >
              {this.renderSwiper()}
            </Carousel>
            {/* nav导航 */}
            <Flex className="nav">
              {this.renderNav()}
            </Flex>
            {/* 租房小组 */}
                <div className="group">
                    <Flex className="group-title" justify="between">
                    <h3>租房小组</h3>
                    <span>更多</span>
                    </Flex>
                    {this.renderGroups()}
                </div>
            </div>
        );
      }
}

export default Index;