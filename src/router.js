import Vue from 'vue'
import VueRouter from 'vue-router'
const landing = () => import(/*webpackChunkName:"home"*/'@/components/Landing.vue')
const detail = () => import(/*webpackChunkName:"detail"*/'@/components/Detail.vue')

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {path:'/', component:landing},
    {path:'/detail',component:detail, meta:{detail:true}},
    {path:'*',redirect:'/'}
  ]
})