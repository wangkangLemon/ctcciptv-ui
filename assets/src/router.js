import Vue from 'vue'
import Router from 'vue-router'
import commtend from './routers/commtend'
import whole from './routers/whole'
import cultivation from './routers/cultivation'
import baby from './routers/baby'
import disease from './routers/disease'
import diseaseList from './routers/diseaseList'
import interview from './routers/interview'
import proadcast from './routers/proadcast'
import proadcastcopy from './routers/proadcastcopy'
import homepage from './routers/homepage'
import more from './routers/more'

Vue.use(Router)
// const router = new Router
export default new Router({
	base: '/view',
	mode:'history',
	routes: [
		{
		  path:'/',
		  components:require("./views/index.vue"),
		  children:[
			...commtend,
			whole,
			cultivation,
			baby,
			disease,
			diseaseList,
			interview,
			more
		  ],
		  redirect:'/commtend'
		},
		proadcast,
		proadcastcopy,
		homepage
		
	]

})