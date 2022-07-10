import Vue from "vue";
import App from "./App.vue";
import "@/assets/flexible.js";
import "@/assets/styles/reset.css";
import router from "@/router";

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
} from "vant";

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);

Vue.config.productionTip = false;

import { getRecommendListApi } from "@/apis";

async function fn() {
  try {
    const res = await getRecommendListApi();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
fn();

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
