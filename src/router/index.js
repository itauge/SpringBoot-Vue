import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BookManage from "../views/BookManage";
import AddBook from "../views/AddBook";
import BookUpdate from "../views/BookUpdate";
import PageFour from "../views/PageFour";
import Index from "../views/Index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "圖書管理",
    component: Index,
    redirect:"/BookManage",
    children:[
      {
        path: '/BookManage',
        name: '查詢圖書',
        show: true,
        component: BookManage
      },
      {
        path: '/AddBook',
        name: '添加圖書',
        show: true,
        component: AddBook
      },
      {
        path: '/update',
        name: '修改',
        show: false,
        component: BookUpdate
      }
    ]
  },
  {
    path: 'navigation',
    name: '導航2',
    component: Index,
    children: [
      {
        path: '/pageFour',
        name: 'Pagefour',
        show: true,
        component: PageFour
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
