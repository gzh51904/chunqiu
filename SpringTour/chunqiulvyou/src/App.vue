<template>
	<div class="app">
		<!-- <router-view /> -->
		<keep-alive><router-view /></keep-alive>

		<el-footer>
			<!-- v-model="selected" -->
			<mt-tabbar fixed v-model="selected">
				<mt-tab-item
					:id="item.name"
					v-for="item in components"
					:key="item.name"
					@click.native="goto(item.path)"
				>
					<!-- <router-link :to="item.path" tag="span"> -->
					<span class="navBottom">
						<img class="navPic" slot="icon" :src="item.icon" />
						<p class="navWord">{{ item.title }}</p>
					</span>
					<!-- </router-link> -->
				</mt-tab-item>
			</mt-tabbar>
		</el-footer>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	name: 'app',
	data() {
		return {
			components: [
				{
					title: '首页',
					path: '/home',
					name: 'Home',
					icon: require('./assets/img/zhuye1.png')
				},
				{
					title: '目的地',
					path: '/goal',
					name: 'Goal',
					icon: require('./assets/img/mudidi1.png')
				},
				{
					title: '发现',
					path: '/discover',
					name: 'Discover',
					icon: require('./assets/img/faxian1.png')
				},
				{
					title: '客服',
					path: '/kefu',
					name: 'Kefu',
					icon: require('./assets/img/kefu1.png')
				},
				{
					title: '我的',
					path: '/mine',
					name: 'Mine',
					icon: require('./assets/img/wode1.png')
				}
			],
			selected: 'Home'
		}
	},
	methods: {
		goto(path) {
			console.log('path:', path) // /goal
			if (path === '/goal') {
                this.$router.push(path + '/hot')
                
                // 有bugbugbugbugbugbugbugbugbugbugbugbugbugbugbugbugbugbugbugbugbug
			} else {
				this.$router.push(path)
			}
		}
	},
	created() {
		// 刷新保持高亮效果，刷新后保持当前的高亮的页面
		let hash = window.location.hash.slice(2)
		// console.log("7777", hash);
		if (hash != '') {
			if (hash.slice(0, 4) == 4) {
				console.log('qqqqqqq', hash)
				this.selected = 'Goal'
			} else {
				hash = hash.replace(hash[0], hash[0].toUpperCase())
				this.selected = hash
			}
		} else {
			this.selected = 'Home'
		}
	},
	beforedestory() {
		let hash = window.location.hash.slice(2)
		console.log('dectory:', hash)
	},
	components: {}
}
</script>

<style lang="scss">
/* scoped */
@import './assets/iconfont/iconfont.css';

body {
	margin: 0;
	padding: 0;
}

.active {
	color: aqua;
}

.mint-tabbar {
	height: 50px;

	.navBottom {
		.navPic {
			height: 23px;
		}

		.navWord {
			margin-top: 0px;
		}
	}
}
</style>