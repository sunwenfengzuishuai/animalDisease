<template>
	<div class="incidence-rate">
		<div class="illness-cont" v-for="(illness, index) in illnesses" v-if="index<15" @click="btnClick(illness.id, illness.oiednamecn, illness.oiednameen)">
			<div class="illness-mask">
				<div class="illness-fill" :style="'height:'+illness.count/maxnum*100+'%;'"></div>
			</div>
			<span>{{illness.oiednamecn==null?illness.oiednameen:illness.oiednamecn}}</span>
		</div>
	</div>
</template>

<style scoped>
	.incidence-rate{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	.illness-cont{
/* 		box-sizing: border-box;
  		border: solid 1px #58e7e7; */
  		width: 20%;
  		flex-shrink: 1;
  		position: relative;
	}
	.illness-cont span{
		display: inline-block;
		width: 100%;
		color: white;
		font-size: 0.4em;
		text-align: center;
		position: absolute;
		bottom: 5%;
		overflow: hidden;
	}
	.illness-mask{
		width: 60%;
		height: 75%;
		margin: 20% auto;
		background-color: #0c2f3f;
		display: flex;
		flex-direction: column-reverse;
	}
	.illness-fill{
		width: 100%;
		height: 50%;
		background-color: #2f8fbe;
		margin-bottom: 0;
		transition:height 1s;
	}
	.illness-mask:hover{
		background-color: #0c2f3f;
	}
	.illness-mask:hover .illness-fill{
		background-color: #58e7e7;
	}
	/* incidence-rate end */
</style>

<script>
	import request from "@/request/viewindex.js";
	export default {
		data(){
			return {
				illnesses: [],
				diseaseid: -1,
				diseasedata: {},
			}
		},
		 mounted(){		//async 异步请求
			/*this.drawLine();*/
      		this.querydisease()
		},
		methods: {
			btnClick(id, namecn, nameen){
				this.diseaseid = id;
				this.diseasedata = {diseaseid: this.diseaseid, oienamecn:namecn, oienameen: nameen}
				this.$emit('childByValue', this.diseasedata)
			},
    		async querydisease(){
    			var data = await request.querydisease();
    			this.illnesses = data.disease;
    			this.maxnum = this.illnesses[0].count;
    		},
		},
	}
</script>