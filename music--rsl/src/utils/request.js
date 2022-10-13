import axios from "axios"//引入
axios.defaults.baseURL = "http://localhost:3000"//网易云接口地址
export default axios//向外导出即可
//二次封装，好处 统一管理，更改文件目录方便新建api



