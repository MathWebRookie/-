import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible" // 适配
import "@/styles/reset.css" // 初始化样式
import router from '@/router'//路由对象
import { Tabbar, TabbarItem } from 'vant';
import { NavBar } from 'vant';
import { recommendMusicAPI } from '@/api'//导出请求的数据
import { Col, Row } from 'vant';
import { Image as VanImage } from 'vant';
import { Cell, Icon, CellGroup, Search } from 'vant';


  async function fn(){
  const res = await recommendMusicAPI()//api方法会请求原地的axios请求在原地的promise对象（含有ajax请求）

}
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Search);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
