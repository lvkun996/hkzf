import axios from '../../utils/request'

// 获取swiper数据
export function getSwiper () {
    return axios.get('/home/swiper')
}

// 获取租房小组数据   字符串拼接 query参数的时候，第二个参数是个对象{} params就直接是query参数
export function getGroups (area='AREA|88cff55c-aaa4-e2e0') {
    return axios.get('/home/groups', {
        params: area
    })
}