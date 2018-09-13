<template>
	<div class="tab">
		<div class="top">
			<router-link tag="div" class="tab-item" to="/app/:user/maincont">
				<i></i>
				<span class="tab-link">首页</span>
			</router-link>
			<router-link tag="div" class="tab-item" to="/app/:user/illnesscont">
				<i></i>
				<span class="tab-link">疫病</span>
			</router-link>
			<router-link tag="div" class="tab-item" to="/app/:user/productcont">
				<i></i>
				<span class="tab-link">生产</span>
			</router-link>
			<router-link tag="div" class="tab-item" to="/app/:user/tradecont">
				<i></i>
				<span class="tab-link">贸易</span>
			</router-link>
		</div>
		<div class="foot">
			<div class="addcont">
				<div class="licont"><span>个人中心</span></div>
				<div class="licont"><span>退出登录</span></div>
			</div>
			<div class="avator-cont">
				<img src="../../assets/avator.png" width="100%">
			</div>
			<span>{{user.username}}</span>
		</div>
	</div>
</template>

<style scoped>
	html, body, div{
		padding: 0;
		margin: 0;
		height: 100%;
	}
	@font-face {
	  font-family: 'icomoon';
	  src:  url('../../assets/fonts/icomoon.eot?445nya');
	  src:  url('../../assets/fonts/icomoon.eot?445nya#iefix') format('embedded-opentype'),
	    url('../../assets/fonts/icomoon.ttf?445nya') format('truetype'),
	    url('../../assets/fonts/icomoon.woff?445nya') format('woff'),
	    url('../../assets/fonts/icomoon.svg?445nya#icomoon') format('svg');
	  font-weight: normal;
	  font-style: normal;
	}
	i{
		font-family: "icomoon";
		font-style: normal;
		color: #fff;
	}
	.tab-item i{
		font-size: 2.5em;
	}
	.tab{
		display: flex;
		flex-direction: column;
		height: 100%;
		font-size: 0.8em;
		background-color: rgba(56, 56, 56, 0.2);
		color: white;
		text-align: center;
		justify-content: space-between;
	}
	.tab-item, .foot{
		text-align: center;
		width: 100%;
		height: 10%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 10px auto;
	}
	.tab-link{
		width: 100%;
	}
	.router-link-active{
		border-right: 4px solid #fff;
	}
	.foot{
	/* 	overflow: hidden; */
		position: relative;
	}
	.foot .avator-cont{
		margin: 0 auto;
		padding-bottom: 80%;
		width: 80%;
		height: 0;
		border-radius: 50%;
		overflow: hidden;
	}
	.foot .addcont{
		width: 0px;
		height: 100px;
		position: absolute;
		left: 100%;
		bottom: 0;
		z-index: 999;
		background-color: #1b1d38;
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
		overflow: hidden;
	}
	.addcont .licont{
		line-height: 50px;
	}
	.foot:hover{
		background-color: #212138;
	}
	.foot:hover .addcont{
		width: 200px;	
	}
	.addcont .licont:hover{
		background-color: #212138;
	}
</style>

<script>
	export default {
		props: {
			user: {
				type: Object,
				default: null
			},
		},
		mounted(){		//async 异步请求
		},
	}
</script>
