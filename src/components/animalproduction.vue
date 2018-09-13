<template>
	<div class="animal-production">
		<div class="module-name">
			<span>畜牧生产</span>
			<!-- <span>\</span> -->
			<div class="choise-cont">
				<RadioGroup class="centerchoise" @on-change="queryproduct" v-model="proitemid" type="button" size="small">
			        <Radio class="choise" label="1057">鸡</Radio>
			        <Radio class="choise" label="1034">猪</Radio>
			        <Radio class="choise" label="1096">马</Radio>
			        <Radio class="choise" label="976">羊</Radio>
				</RadioGroup>
			</div>
		</div>

		<div class="tabletitle-cont">
			<table class="tabletitle" cellspacing="0" cellpadding="0">
				<tr>
					<td class="firstcell"> </td>
					<td>地区</td>
					<td>时间</td>
	 				<td>存栏量</td>
					<td>单位</td>
				</tr>
			</table>
		</div>
		<div class="tablecontent-cont scorllbar">
			<table class="tablecontent" cellspacing="0" cellpadding="0">
				<tr v-for="(animproduct, index) in animproducts">
					<td class="firstcell">{{index+1}}</td>
					<td>{{animproduct.country}}</td>
					<td>{{animproduct.year}}</td>
					<td>{{animproduct.value}}</td>
					<td>{{animproduct.unitcn}}</td>
				</tr>
			</table>
			<div class="page-cont">
				<div class="totalcont">
					共{{prototalCount}}条
				</div>
				<div class="pagebar">
					<Page :current="propageNo" :page-size="propageSize" :total="prototalCount" show-total  @on-change="propageChanged" simple />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.rightchoise .choise{
		background-color: #18183f;
		color: #fff;
	}
	.tabletitle-cont{
		width: 100%;
		height: 10%;
	}
	.tabletitle tr{
		height: 100%;
	}
	.tablecontent-cont{
		width: 100%;
		height: 80%;
		overflow-x: hidden;
		overflow-y: auto;
	}
	 /*滚动条整体样式*/
    /*高宽分别对应横竖滚动条的尺寸*/
    .scorllbar::-webkit-scrollbar {
        width: 4px;    
        height: 4px;
    }
    /*滚动条里面小方块*/
    .scorllbar::-webkit-scrollbar-thumb {
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(50,200,200,0.6);  
        background: rgba(50,200,200,0.5);
    }
    /*滚动条里面轨道*/
    .scorllbar::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
        border-radius: 0;
        background: rgba(255,255,255,0.1);
    }
	table{
		height: 100%;
		width: 100%;
	}
	.tabletitle tr td{
		font-size: 0.8em;
		color: #217197;
	}
	.latest-outbreak .tablecontent tr{
		width: 100%;
		height: 25px;
	}
	.tablecontent tr:nth-child(odd){
		background-color: #122648;
	}
	.tablecontent tr:hover{
		background-color: #4666ee;
		cursor: pointer;
	}
	table td{
		font-size: 0.8em;
		color: #fff;
		text-align: center;
		padding: 0;
		margin: 0;
		width: 20%;
	}
	.index{
		width: 10%;
	}
	.tablecontent tr td:nth-child(1){
		color: #2abbef;
	}
	.name, .country, .time{
		width: 20%;
	}
	.type{
		width: 30%;
	}
	.body-right-cont .module-name{
		height: 10%;
	}
	.body-right-cont .module-name span{
		padding-top: 1%;
		font-size: 1.2em;
	}
	.body-right-cont .module-name span:nth-child(2){
		font-size: 1.3em;
	} 
	.body-right-cont .tablecontent-cont{
		height: 80%;
	}
	.body-right-cont .tablecontent tr{
		width: 100%;
		height: 20px;
	}
	.body-right-cont .module-name .choise-cont{
		display: flex;
		width: 75%;
		flex-shrink: 1;
		justify-content: space-between;
		margin-top: 1%;
		margin-right: 2%;
	}
	.body-right-cont .choise{
		height: 20px;
		background-color: #18183f;
		color: #fff;
		line-height: 20px;
	}
	.inpexp-cont{
		width: 40%;
		float: right;
		color: #2f6584;
		font-size: 1.2em;
		display: flex;
		flex-direction: row-reverse;
	}
	.impexp-cont .inpexp{
		width: 200px;
		background-color: #fff;
	}
	.impexp-cont .inpexp a{
		text-decoration: none;
	}

	/* 分页 */
	.page-cont{
		height: 27px;
		width: 90%;
		margin: 0 auto;
		margin-bottom: 1%;
		background-color: #fff;
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
  		border-radius: 5px;
  		display: flex;
	}
	.totalcont{
		line-height: 27px;
		margin-left: 4%;
	}
	.pagebar{
		width: 60%;
		margin-left: 4%;
	}
</style>