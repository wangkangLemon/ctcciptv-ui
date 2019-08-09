<template>
	<div id="app">
		<transition :name="transitionName">
			  <router-view></router-view>
		</transition>
	
	</div>
</template>
<script>
	export default {
		name: 'App',
		data() {
			return{
				transitionName: '',
			}
		},
		mounted() {
			

		},
		methods: {
			
		},
		watch: { //使用watch 监听$router的变化
			$route(to, from) {
				//如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if(to.meta.index > 0) {
					
					if(to.meta.index < from.meta.index) {
						this.transitionName ='slide-right';
						
					} else {
						this.transitionName ='slide-left';
						
					}
				} else if(to.meta.index == 0 && from.meta.index > 0) {
					this.transitionName ='slide-right';
				}
			}
		}
	}
</script>
<style>
	/* #app {
		display: flex;
		flex: 1;
		flex-direction: column;
		background: #F2F2F2;
		height: 100%;
		width: 100%;
	
	}
	 */
</style>