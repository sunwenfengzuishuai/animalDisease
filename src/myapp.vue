<template>
	<div class="main-containner">
		<header class="header">
			<span>动物疫病风险评估与监测预警</span>
		</header>
		<div class="toplen"></div>
		<div class="body-containner">
			<div class="body-left-cont">
				<!-- 最新疫情板块的容器 -->
				<div class="latest-outbreak-cont">
					<!-- 待修改分成单独的模块 -->
					<!-- <latestOutbreak></latestOutbreak> -->

					<div class="latest-outbreak">
						<div class="module-name">
							<span>最新疫情</span>
							<!-- <span>\</span> -->
							<div class="choise-cont">
								<RadioGroup class="rightchoise" @on-change="queryreport" v-model="day" type="button" size="small">
							        <Radio class="choise" label="10">10天</Radio>
							        <Radio class="choise" label="20">20天</Radio>
							        <Radio class="choise" label="30">30天</Radio>
    							</RadioGroup>
							</div>
						</div>
						<div class="tabletitle-cont">
							<table class="tabletitle" cellspacing="0" cellpadding="0">
								<tr>
									<td class="index"> </td>
									<td class="name">疫病名称</td>
									<td class="country">地区</td>
					 				<td class="time">时间</td>
									<td class="type">类型</td>
								</tr>
							</table>
						</div>
						<div class="tablecontent-cont scorllbar">
							<table class="tablecontent" cellspacing="0" cellpadding="0">
								<tr v-for="(outbreak, index) in outbreaks" @click="trclick(outbreak)">
									<td class="index">{{index+1}}</td>
									<td class="name">{{outbreak.diease}}</td>
									<td class="country">{{outbreak.country}}</td>
									<td class="time">{{outbreak.reportdate}}</td>
									<td class="type">{{getReportTypeStr(outbreak)}}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
				<!-- 疫病详情 -->
				<div class="illness-details-cont">
					<div class="illness-details">
						<div class="tablecontent-cont scorllbar">
							<table class="tablecontent" cellspacing="0" cellpadding="0">
								<tr v-for="(psentiment, index) in psentiments">	
									<td>案事发当时</td>
									<td>{{psentiment.title}}</td>
									<td>阿瑟东</td>
									<td>{{psentiment.title}}</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>


			<div class="body-midle-cont">
				<!-- 地图板块的容器 -->
				<div class="map-cont">
					<div class="map">
						<world-map :coordinates="coordinates"></world-map>
					</div>
				</div>

				<!-- 舆情板块的容器 -->
				<div class="public-sentiment-cont">
					<div class="public-sentiment">
						<div class="module-name">
							<span>舆&nbsp;&nbsp;情</span>
							<!-- <span>\</span> -->
						</div>
						<div class="tabletitle-cont">
							<table class="tabletitle" cellspacing="0" cellpadding="0">
								<tr>
									<td>标题</td>
					 				<td>来源</td>
									<td>发布时间</td>
								</tr>
							</table>
						</div>
						<div class="tablecontent-cont scorllbar">
							<table class="tablecontent" cellspacing="0" cellpadding="0">
								<tr v-for="(psentiment, index) in psentiments">
									<td>{{psentiment.title}}</td>
									<td>{{psentiment.sourse}}</td>
									<td>{{psentiment.time}}</td>
								</tr>
							</table>
						</div>
					</div>
					<div class="public-data-show">
						
					</div>
				</div>
			</div>



			<div class="body-right-cont">
				<div class="body-right-item1">
					<!-- 畜牧生产板块的容器 -->
					<div class="animal-production-cont">
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
					</div>
				</div>
				<div class="body-right-item2">
					<!-- 国际贸易板块的容器 -->
					<div class="international-trade-cont">
						<div class="animal-production">
							<div class="module-name">
								<span>畜牧贸易</span>
								<!-- <span>\</span> -->
								<div class="choise-cont">
									<RadioGroup class="centerchoise" @on-change="querytrade" v-model="traditemid" type="button" size="small">
								        <Radio class="choise" label="1057">鸡</Radio>
								        <Radio class="choise" label="1034">猪</Radio>
								        <Radio class="choise" label="1096">马</Radio>
								        <Radio class="choise" label="976">羊</Radio>
	    							</RadioGroup>
	    							<RadioGroup class="rightchoise" @on-change="querytrade" v-model="elementid" type="button" size="small">
								        <Radio class="choise" label="5608">进口</Radio>
								        <Radio class="choise" label="5909">出口</Radio>
	    							</RadioGroup>
								</div>
							</div>

							<div class="tabletitle-cont">
								<table class="tabletitle" cellspacing="0" cellpadding="0">
									<tr>
										<td class="firstcell"> </td>
										<td>地区</td>
										<td>时间</td>
						 				<td>进出口值</td>
										<td>单位</td>
									</tr>
								</table>
							</div>
							<div class="tablecontent-cont scorllbar">
								<table class="tablecontent" cellspacing="0" cellpadding="0">
									<tr v-for="(trade, index) in trades">
										<td class="firstcell">{{index+1}}</td>
										<td>{{trade.country}}</td>
										<td>{{trade.year}}</td>
										<td>{{trade.value}}</td>
										<td>{{trade.unitcn}}</td>
									</tr>
								</table>
								<div class="page-cont">
									<div class="totalcont">
										共{{tradtotalCount}}条
									</div>
									<div class="pagebar">
										<Page :current="tradpageNo" :page-size="tradpageSize" :total="tradtotalCount" show-total  @on-change="tradpageChanged" simple />
									</div>
								</div>	
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<!-- 发病率柱状展示图板块容器 -->
			<!-- <div class="datashow">
				<div class="incidence-rate">
					<div class="illness-cont" v-for="illness in illnesses">
						<div class="illness-mask">
							<div class="illness-fill" :style="'height:'+illness.count/maxnum*100+'%;'"></div>
						</div>
						<span>{{illness.oiednamecn==null?illness.oiednameen:illness.oiednamecn}}</span>
					</div>
				</div>
			</div>
			<div class="datashow">
				<div class="incidence-rate">
					<div class="illness-cont" v-for="illness in illnesses">
						<div class="illness-mask">
							<div class="illness-fill" :style="'height:'+illness.count/maxnum*100+'%;'"></div>
						</div>
						<span>{{illness.oiednamecn==null?illness.oiednameen:illness.oiednamecn}}</span>
					</div>
				</div>
			</div> -->
			
			<div class="datashow">
				<div class="tabcont">
					<tab></tab>
				</div>	
				<router-view></router-view>
			</div>
			<div class="datashow">
				<div class="tabcont">
					<tab></tab>
				</div>
				<router-view></router-view>
			</div>
		</footer>
	</div>
</template>

<style scoped>
	html, body, div{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.main-containner{
		width: 100%;
		height: 100vh;
		background:#05121A url('./assets/main-background.jpg') no-repeat;
		/* background-color: yellowgreen; */
		background-size: 100%;
		/* color: #334a53; */
	}
	.header{
		width: 100%;
		height: 10%;
		/* display: table; */
		/* background-color: rgba(51,74,85, 0.6); */
		background-color: rgba(24, 24, 64, 0.8);
		text-align: center;
	}
	.header span{
		display: inline-block;
		padding-top: 0.4%;
/* 		display: table-cell;
		vertical-align: middle; */
		color: #fff;
		font-size: 1.6em;
	}
	.toplen{
		width: 550px;
		height: 6%;
		margin: 0 auto;
		margin-top: -4%;
		background: url('./assets/toplen.gif') 0 44%;
		background-size: 100%;
	}
	.body-containner{
		width: 100%;
		height: 65%;
		display: inline-flex;
	}
	footer{
		width: 100%;
		height:25%;
		margin-top: 4px;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);
		display: flex;
		justify-content: space-between;
	}
	.datashow{
		width: 100%;
		height: 100%;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
  		position: relative;
	}
	.tabcont{
		width: 20%;
		height: 20%;
		position: absolute;
		top: -20%;
		right: 0%;
	}
	.body-left-cont{
		width: 30%;
		height: 107%;
		display: flex;
		flex-direction: column;
		margin-right: 4px;
		position: relative;
		top: -7%;
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
  		/* -webkit-border-image:url(./assets/border1.png) 1 1 round; 
		-o-border-image:url(./assets/border1.png) 1 1 round; 
		border-image:url(./assets/border1.png) 1 1 round; */
	}
	.body-midle-cont{
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin-right: 4px;
	}
	.body-right-cont{
		width: 30%;
		height: 107%;
		display: flex;
		flex-direction: column;
		position: relative;
		top:  -7%;
		/* overflow: hidden; */
	}
	.latest-outbreak-cont{
		width: 100%;
		height: 72%;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);

		box-sizing: border-box;
  		border-bottom: solid 2px #00cd00;
	}
	.illness-details-cont{
		width: 100%;
		height: 28%;
		background-color: rgba(64, 64, 88, 0.8);
	}
	.illness-details-cont .tablecontent tr{
		background-color: rgba(64, 64, 88, 0.8);
	}
	.illness-details-cont .tablecontent tr:hover{
		background-color: rgba(64, 64, 88, 0.8);
	}
	.map-cont{
		width: 100%;
		height: 72%;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
	}
	.public-sentiment-cont{
		width: 100%;
		height: 28%;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
  		display: flex;
	}
	.body-right-item1{
		width: 100%;
		height: 50%;
		margin-bottom: 4px;
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
	}
	.animal-production-cont{
		width: 100%;
		height: 100%;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);
	}
	.body-right-item2{
		width: 100%;
		height: 50%;
		box-sizing: border-box;
  		border: solid 1px #58e7e7;
	}
	.international-trade-cont{
		width: 100%;
		height: 100%;
		/* background-color: rgba(2, 108, 141, 0.8); */
		background-color: rgba(24, 24, 64, 0.8);
	}
	/* latest-outbreak start */
	.module-name{
		width: 100%;
		height: 10%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.module-name span{
		display: inline-block;
		padding-top: 2%;
		padding-left: 3%;
		color: #CCC;
		font-size: 1.4em;
	}
	.module-name .choise-cont{
		display: flex;
		flex-shrink: 1;
		margin-top: 2%;
		margin-right: 2%;
	}
	/* .module-name span:nth-child(2){
		color: #2f6584;
		font-size: 1.6em;
		padding-left: 10%;
	} */
	/* .rightchoise{
		right: 2%;
		top: 20%;
	} */
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
	.illness-details .tablecontent-cont{
		height: 100%;
	}
	.illness-details tr td{
		text-align: left;
	}
	.illness-details tr td:nth-child(odd){
		color: #2abbef;
		text-align: center;
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
	/* latest-outbreak end */
	/* .body-right-cont中的两个板块 start */
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
	/* .body-right-cont .centerchoise{
		right:40%;
		top: 20%;
	} */
	/* animproduct start*/
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
	/* animproduct end*/
	/* .body-right-cont中的两个板块 end */

	/* public-sentiment start */
	.public-sentiment{
		width: 74%;
	}
	.public-data-show{
		width: 26%;
		background: url('./assets/datashow.png') no-repeat;
		-webkit-background-size: 80%;
		background-size: 80%;
	}
	.public-sentiment .module-name{
		height: 10%;
	}
	.public-sentiment .module-name span{
		padding-top: 0%;
		padding-left: 3%;
		font-size: 1.1em;
	}
	.public-sentiment .tabletitle-cont{
		height: 15%;
	}
	.public-sentiment .tablecontent-cont{
		height: 75%;
	}
	.public-sentiment .tablecontent-cont tr{
		height: 10px;
	}
	.public-sentiment table td:nth-child(1){
		width: 50%;
	}
	.public-sentiment .tablecontent-cont td:nth-child(1){
		color: #fff;
	}
	.firstcell{
		width: 10%;
	}
	/* public-sentiment end */
	/* incidence-rate start */
	.incidence-rate{
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

	/* 分页start */
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

	/* 分页end */
</style>

<script>
	// import latestOutbreak from "./latestOutbreak/latestOutbreak.vue";
	import request from "./request/viewindex.js";
	import echarts from 'echarts';
	import WorldMap from "./components/worldmap.vue"
	import Tab from './components/tab/illtab.vue'

	//var echarts = require('echarts');

	export default {
		data(){
			return {
				message: "123456",
				maxnum: 1,
				outbreaks: [],
				animproducts: [],
				trades: [],
				illnesses: [],
				coordinates: [],
				psentiments: [
					{title: '越南发生高致病性禽流感疫情', keyword: '越南，禽流感', sourse: '食品资讯中心', time: '2018-08-06 16:06'},
					{title: '大陸爆非洲豬瘟 比口蹄疫還恐怖', keyword: '非洲猪瘟，口蹄疫', sourse: '中国时报', time: '2018-08-06 04:11'},
					{title: '伦敦地铁飙40度 高温惹来鼠疫', keyword: '高温，鼠疫', sourse: '凤凰网', time: '2018-08-06 08:56'},
					{title: '冈比亚发生口蹄疫疫情', keyword: '冈比亚，口蹄疫', sourse: '食品资讯中心', time: '2018-07-30 10:31'},
					{title: '俄罗斯向OIE呈报13起禽流感', keyword: '俄罗斯，禽流感', sourse: '国际畜牧网', time: '2018-07-31 14:51'},
					{title: '缅甸北部猪瘟情况加重！已有600头猪死亡！', keyword: '缅甸北部，猪瘟', sourse: '凤凰网', time: '2018-08-6 08:58'},
				],	
				day : '30',
				elementid: '5608',
				proitemid: '1057',
				traditemid: '1057',
				propageNo: 1,
				propageSize: 10,
				prototalCount: 0,
				tradpageNo: 1,
				tradpageSize: 10,
				tradtotalCount: 0,
				oiecountryid: -1
			}
		},
		mounted(){		//async 异步请求
			/*this.drawLine();*/
			this.queryreport();
      		this.queryproduct();
      		this.querytrade();
      		this.querydisease()
		},
		methods: {
			async trclick(outbreak){
				console.log(outbreak.reportid);
				var data = await request.queryoutbreaks(outbreak.reportid);
				this.coordinates = data;
				this.oiecountryid = outbreak.oiecountryid;
				alert(outbreak.primeid);
    			this.queryproduct();
    			this.querytrade();
			},
			async queryreport(){
        		var data = await request.queryreport(this.day);
        		this.outbreaks = data.report;
        		this.coordinates = data.outbreak;
    		},
    		async queryproduct(){
    			var data = await request.queryproduct(this.propageNo, this.propageSize, this.proitemid, this.oiecountryid);
    			this.animproducts = data.list;
    			this.prototalCount = data.totalCount;
    		},
    		async querytrade(){
    			var data = await request.querytrade(this.tradpageNo, this.tradpageSize, this.elementid, this.traditemid, this.oiecountryid);
    			this.trades = data.list;
    			console.log(data);
    			this.tradtotalCount = data.totalCount;
    		},
    		getReportTypeStr(row) {
			    switch (row.reportype) {
			        case 0:
			        	return "首次报告";
			        	break;
			        case 1:
			        	return `后续报告 ` + row.orderno;
			        	break;
			        case 2:
			        	return `后续报告 ${row.orderno} (终报)`;
			         	break;
			        default:
			       		break;
		     	}
			 	return "未知";
		    },
		    async tradpageChanged(page) {
		      this.tradpageNo = page;
		      await this.querytrade();
			},
		    async propageChanged(page) {
		      this.propageNo = page;
		      await this.queryproduct();
		    },
		    async pageSizeChanged(size) {
		      this.pageSize = size;
		      await this.querytrade();
		    },
		},
		components: {
			WorldMap,
			Tab,
		}
	}
</script>