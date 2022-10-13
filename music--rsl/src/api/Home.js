import request from '@/utils/request'
//网络请求负责拿到首页推荐歌单的数据
export const recommendMusic = params =>request({
    url:'/personalized',
    params
})//向外倒出

export const newMusic = params => request({
    url: '/personalized/newsong',
    params
})//向外倒出