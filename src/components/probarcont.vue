<template>
	<div class="pro-rank">
		<div class="pro-cont" v-for="(animproduct, index) in animproducts" v-if="index<10">
			<div class="pro-mask">
				<div class="pro-fill" :style="'height:'+animproduct.value/maxnum*100+'%;'"></div>
				<div class="num-cont"><span>{{animproduct.value}}</span></div>
			</div>
			<div class="name-cont"><span>{{animproduct.country==null?animproduct.faocountry:animproduct.country}}({{animproduct.unitcn}})</span></div>
		</div>
	</div>
</template>

<style scoped>
	.pro-rank{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	.pro-cont{
/* 		box-sizing: border-box;
  		border: solid 1px #58e7e7; */
  		width: 20%;
  		flex-shrink: 1;
  		position: relative;
  		display: flex;
  		flex-direction: column;
	}
	.pro-cont span{
		display: inline-block;
		width: 100%;
		color: white;
		font-size: 0.4em;
		text-align: center;
		overflow: hidden;
	}
	.name-cont{
		width: 100%;
		height: 10%;
	}
	.pro-cont .name-cont span{
		position: absolute;
		bottom: 5%;
	}
	.pro-mask{
		width: 60%;
		height: 75%;
		margin: 20% auto;
		background-color: #339900;
		display: flex;
		flex-direction: column-reverse;
		position: relative;
	}
	.num-cont{
		width: 100%;
		height: 20px;
		position: absolute;
		bottom: 0;
	}
	.pro-cont .num-cont span{
		width: 0;
		color: #000;
	}
	.pro-fill{
		width: 100%;
		height: 50%;
		background-color: #cccc00;
		margin-bottom: 0;
	}
	.pro-mask:hover{
		background-color: #339900;
	}
	.pro-mask:hover .pro-fill{
		background-color: #ffff00;
	}
	.pro-mask:hover .num-cont>span{
		width: 100%;
	}
	/* incidence-rate end */
</style>

<script>
	import request from "@/request/viewindex.js";
	export default {
		props: {
			proitemid: {
				type: String,
				default: null
			},
		},
		watch: {
			proitemid: function(newValue, oldValue){
				// console.log(newValue);
				this.queryproduct();		
			}
		},
		data(){
			return {
				animproducts: [],
				maxnum: 1,
			}
		},
		 mounted(){		//async 异步请求
			/*this.drawLine();*/
      		this.queryproduct()
		},
		methods: {
    		async queryproduct(){
    			var data = await request.queryproduct(1, 10, this.proitemid, -1);
    			this.animproducts = data.list;
    			this.maxnum = this.animproducts[0].value;
    		},
		},
	}
</script>