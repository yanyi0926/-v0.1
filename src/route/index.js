//引入VueRouter
import VueRouter from 'vue-router'
//引入路由组件
import Home from '@/components/Body.vue';
import Protestantism from '@/views/ProtestantismBody';
import DiningHall from '@/views/DiningHallBody';
import Dormitory from '@/views/DormitoryBody';

let OringinPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        OringinPush.call(this,location,resolve,reject)
    }else{
        OringinPush.call(this,location,()=>{},()=>{})
    }
}
let OringinReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        OringinReplace.call(this,location,resolve,reject)
    }else{
        OringinReplace.call(this,location,()=>{},()=>{})
    }
}
//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
	mode:'history',
	routes:[
		{
			path: '/',
			redirect: '/home'
		},
		{
			name:'home',
			path:'/home',
			component: Home,
		},
		{
			name:'Protestantism',
			path:'/Protestantism',
			component: Protestantism
		},
        {
			name:'DiningHall',
            path:'/DiningHall',
			component:DiningHall
        },
        {
			name:'Dormitory',
			path:'/Dormitory',
			component:Dormitory
		},
	],
})

//暴露router
export default router