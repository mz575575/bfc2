import Vue from "vue";
import Router from "vue-router"
import Index from "./pages/Index"
import Zx from "./pages/Zx"
import btn_lc from "./pages/Btn_lc"
import bt from "./pages/Bt"
import n1 from "./pages/New1"


Vue.use(Router);
export default new Router({
  routes:[
    {path:"/",component:Index},
    {path:"/zx",component:Zx},
    {path:"/btn_lc",component:btn_lc},
    {path:"/bt",component:bt},
    {path:"/new",component:n1},
  ]
})