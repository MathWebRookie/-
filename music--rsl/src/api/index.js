//api下每一个api都引入index.js
import { recommendMusic, newMusic } from './Home'
import { search, searchResultList } from './search'
import { getSongById, getLyricById } from './Play'
export const recommendMusicAPI = recommendMusic//请求推荐歌单的方法
export const newMusicAPI = newMusic//请求
export const searchAPI = search//请求
export const searchResultListAPI = searchResultList//请求
export const getLyricByIdAPI = getLyricById
export const getSongByIdAPI = getSongById