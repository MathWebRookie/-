import request from '@/utils/request'
//网络请求负责拿到首页推荐歌单的数据
export const search = params => request({
    url: '/search/hot',
    params
})//向外倒出
export const searchResultList = params => request({
    url: '/cloudsearch',
    params
})//向外倒出