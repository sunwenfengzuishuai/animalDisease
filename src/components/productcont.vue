<style>
	ul.ivu-cascader-menu {
		background-color: #fff;
	}
	.ivu-select-dropdown{
		height: 240px;
		background-color: #fff;
	}
	.ivu-select-dropdown span{
		color: #666;
		font-size: 14px;
	}
	.choise-cont ul.ivu-cascader-menu{
		background-color: #141738;
	}
</style>
<style scoped>
	html, body, div{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.main-containner{
		width: 100%;
		height: 100vh;
		background:#05121A url('../assets/main-background.jpg') no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
	}
	.header{
		width: 100%;
		height: 60px;
		background-color: rgba(24, 24, 64, 0.8);
		text-align: center;
	}
	.header span{
		line-height: 60px;
		color: #fff;
		font-size: 1.6em;
	}
	.body-containner{
		width: 100%;
		height: 100%;
		display: inline-flex;
	}
	.body-right-cont{
		width: 50%;
		height: 100%;
	}
	/* 分页start */
	.page-cont{
		height: 27px;
		width: 90%;
		margin: 0 auto;
		margin-bottom: 1%;
		background-color: #fff;
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
	.erro-show-cont{
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: lightskyblue;
		font-size: 1.6em;
	}
	.erro-show{
		text-align: center;
	}
	/* 分页end */
	
	/* 滚动条设置start */
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
	        border-radius: 5%;
	        background: rgba(255,255,255,0.1);
	    }
	/* 滚动条设置end */

	/* 左半边部分内容start */
	.body-left-cont{
		width: 48%;
		height: 100%;
	}
		/* 疫病列表start */
		.body-left-item1{
			width: 100%;
			height: 60%;
			margin-top: -10px;
			background-color: rgba(24, 24, 64, 0.8);
			box-sizing: border-box;
  			border: solid 1px #58e7e7;
  			border-radius: 10px;
  			display: flex;
  			flex-direction: column;
  			justify-content: center;
  			overflow: hidden;
		}
		.ill-cont{
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
		}
			/* 查询条件择栏start */
			.ill-search-cont{
				width: 100%;
				height: 40px;
				background-color: #fff;
				font-size: 1em;
				color: #666;
				display: flex;
				flex-shrink: 0;
			}
			.ill-search-cont .search-cont{
				display: flex;
				height: 30px;
				margin-top: 5px;
				margin-left: 10px;
			}
			/* .ivu-input{
				background-color: rgba(24, 24, 64, 0.8);
				border: 1px solid red;
			} */
				/* 过渡start */
				
				/* 过渡end */
			/* 查询条件选择栏end */
			/* 查询结果显示start */
			.ill-show-cont{
				width: 100%;
				display: flex;
				flex-direction: column;
				position: relative;
			}
			.tabletitle-cont{
				width: 100%;
				height: 24px;
				flex-shrink: 0;
			}
			.tabletitle tr{
				height: 100%;
			}
			.tablecontent-cont{
				width: 100%;
				height: 100%;
				overflow-x: hidden;
				overflow-y: auto;
			}
			table{
				height: 100%;
				width: 100%;
			}
			table tr{
				display: flex;
				padding-top: 0.5%;
			}
			table td{
				font-size: 0.8em;
				color: #fff;
				text-align: center;
				padding: 0;
				margin: 0;
				width: 20%;
				flex-shrink: 1;
			}
			table td:nth-child(1){
				width: 5%;
			}
			.tabletitle tr td{
				font-size: 0.8em;
				color: #217197;
			}
			.tablecontent tr{
				width: 100%;
				height: auto;
				padding-top: 6px;
				padding-bottom: 6px;
			}
			.tablecontent tr:nth-child(2n-1){
				background-color: #122648;
			}
			.tablecontent tr:hover{
				background-color: #4666ee;
				cursor: pointer;
			}
			/* 查询结果显示end */
			.animaltype-cont{
				width: 180px;
				height: 20px;
				background-color: #ccc;
				position: absolute;
				bottom: 8px;
				right: 10px;
				display: flex;
				justify-content: center;
				border-radius: 10px;
			}
		/* 疫病列表end */
		/* 畜牧生产贸易列表start */
		.body-left-item2{
			width: 100%;
			height: 40%;
			margin-top: 10px;
			display: flex;
			background-color: rgba(24, 24, 64, 0.8);
			box-sizing: border-box;
  			border: solid 1px #58e7e7;
  			border-radius: 10px;
		}
		.disreport-cont{
			width: 50%;
			height: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}
		.disreport-cont .tablecontent td:nth-child(3){
			width: 15%;
		}
		.trade-cont{
			width: 50%;
			height: 100%;
			display: flex;
			box-sizing: border-box;
			border-right: solid 1px #58e7e7;
			flex-direction: column;
			position: relative;
		}
		/* 畜牧生产列表end */
	/* 左半边部分内容end */

	/* 右半边部分内容start */
	.body-right-cont{
		width: 52%;
		height: 100%;
		margin-left: 15px;
	}
		/* 地图展示部分start */
			.body-right-item1{
				width: 100%;
				height: 69%;
				margin-top: -10px;
				overflow: hidden;
				position: relative;
				background-color: rgba(24, 24, 64, 0.8);
				box-sizing: border-box;
	  			border: solid 1px #58e7e7;
	  			border-radius: 10px;
			}
			.topten-reviews-cont{
				width: 200px;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				flex-direction: column;
			}
			.topten-reviews{
				width: 90%;
				height: 40px;
				border-radius: 20px;
				z-index: 999;
				margin: 0 auto;
				margin-top: 20px;
				background-color: #cc0000;
				display: flex;
			}
			.topten-reviews:nth-child(2){
				background-color: #cece00;
			}
			.topten-reviews:nth-child(3){
				background-color: #b0b0b0;
			}
			.hot{
				width: 34px;
				height: 34px;
				margin-left: 2%;
				margin-top: 3px;
				border-radius: 50%;
				flex-shrink: 0;
				background:#eee url('../assets/top1.png') no-repeat center;
				-webkit-background-size: 90%;
				background-size: 90%;
			}
			.topten-reviews:nth-child(2) .hot{
				background:#eee url('../assets/top2.png') no-repeat center;
				-webkit-background-size: 90%;
				background-size: 90%;
			}
			.topten-reviews:nth-child(3) .hot{
				background:#eee url('../assets/top3.png') no-repeat center;
				-webkit-background-size: 140%;
				background-size: 140%;
			}
			.topshow{
				width: 100%;
				height: 100%;
				line-height: 40px;
				color: #fff;
				font-size: 14px;
				font-weight:500; 
				padding-left: 10px;
			}
			/* .prompt-cont{
				width: 450px;
				height: 30px;
				position: absolute;
				bottom: 10px;
				right: 10px;
				background-color: #ddd;
				display: flex;
				flex-shrink: 0;
				border-radius: 15px;

			}
			.prompt-cont .prompt-item{
				width: 25%;
				display: flex;
				line-height: 30px;
			}
			.prompt-cont .prompt-item div{
				margin-top: 5px;
				margin-right: 5px;
				width: 20px;
				height: 20px;
				border-radius: 50%;
			}
			.prompt-cont .prompt-item:nth-child(1){
				width: 30%;
				margin-left: 5px;
				margin-right: 10px;
			}
			.prompt-cont .prompt-item .ill-first{
				background-color: #880000;
			}
			.prompt-cont .prompt-item .first{
				background-color: #ff0000;
			}
			.prompt-cont .prompt-item .middle{
				background-color: #ff6600;
			}
			.prompt-cont .prompt-item .end{
				background-color: #ffff00;
			} */
		/* 地图展示部分end */
		/* 爆发点详情展示部分start */
			.body-right-item2{
				width: 100%;
				height: 31%;
				background-color: rgba(24, 24, 64, 0.8);
				box-sizing: border-box;
				border: solid 1px #58e7e7;
				border-radius: 10px;
				margin-top: 10px;
				display: flex;
				overflow: hidden;
			}
			.outbreak-piemap-cont{
				width: 34vh;
				height: 100%;
				display: flex;
				flex-shrink: 0;
			}
			.piemap-cont{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}
			.piemap-cont span{
				display: inline-block;
				color: #fff;
				font-size: 16px;
				margin-top: 8px;
				padding-left: 10px;
			}
			.pie-cont{
				margin-bottom: 1%;
				width: 22vh;
				height: 22vh;
				margin: 0 auto;
				overflow: hidden;
			}
			.pie-data-show{
				width: 100px;
				height: 100%;
				display: flex;
				flex-direction: column;
				flex-shrink: 0;
				justify-content: space-around;
			}
			.pie-item{
				width: 98px;
				height: 36px;
				display: flex;
			
			}
			.item-color-cont{
				width: 25px;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.item-color{
				width: 100%;
				height: 20px;
			}
			.item-value{
				margin-left: 5px;
				color: #fff;
			}
			.pie-item:nth-child(1) .item-color{
				background-color: #ff0000;
			}
			.pie-item:nth-child(2) .item-color{
				background-color: #ff4400;
			}
			.pie-item:nth-child(3) .item-color{
				background-color: #ff8800;
			}
			.pie-item:nth-child(4) .item-color{
				background-color: #ffcc00;
			}
			.item-value span:nth-child(3){
				color: #ff0000
			}
			.outbreak-details-cont{
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: column;
				overflow: hidden;
			}
				/* outbreak表格start */
				.outbreak-details-cont table td:nth-child(n+5){
					width: 10%;
				}
				/* outbreak表格end */
			.module-name{
				width: 100%;
				height: 36px;
				color: #fff;
				font-size: 1.2em;
				display: flex;
				flex-shrink: 0;
				background-color: #141738;
				justify-content: space-between;
			}
			.module-name span{
				display: inline-block;
				line-height: 36px;
				width: 90px;
				margin-left: 20px;
				flex-shrink: 0;
			}
			.module-name .choise-cont{
				width: 200px;
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
				margin-right: 8px;
				flex-shrink: 0;
			}
			.element-cont{
				width: 130px;
				height: 20px;
				background-color: #ccc;
				position: absolute;
				bottom: 5px;
				right: 5px;
				display: flex;
				justify-content: center;
				border-radius: 10px;
			}
		/* 爆发点详情展示部分end */
	/* 右半边部分内容end */
</style>

<template>
	<div class="main-containner">
		<header class="header">
			<span>生产专题</span>
		</header>
		<div class="body-containner">
			<div class="body-left-cont">
				<div class="body-left-item1">
					<div class="ill-cont">
						<div class="ill-search-cont">
							<div class="search-cont">
								<!-- 选择大洲国家 -->
								<Row style="width: 150px; margin-right:5px;"><Cascader :data="countryData" v-model="countryvalue"></Cascader></Row>
								<Row v-if="animaltype == '0'" style="width: 150px; margin-right:5px;"><Cascader :data="animalData" v-model="animalvalue"></Cascader></Row>
								<Row v-if="animaltype == '1'" style="width: 150px; margin-right:5px;"><Cascader :data="proanimalData" v-model="proanimalvalue"></Cascader></Row>
								<Row style="width: 150px; margin-right:5px;">
									<Col span="12">
										<DatePicker type="year" value="2016" placeholder="Select year" style="width: 150px" @on-change="choiseYear"></DatePicker>
									</Col>
								</Row>
								<Button shape="circle" icon="ios-search" @click="queryProData"></Button>
							</div>
						</div>
						<div class="ill-show-cont">
							<div class="tabletitle-cont">
								<table class="tabletitle" cellspacing="0" cellpadding="0">
									<tr>
										<td> </td>
										<td>大洲</td>
										<td>国家</td>
										<td>时间</td>
										<td>产品名称</td>
						 				<td>数量</td>
										<td>单位</td>
									</tr>
								</table>
							</div>
							<div class="tablecontent-cont scorllbar" v-if="productInfor!=undefined">
								<table class="tablecontent" cellspacing="0" cellpadding="0">
									<tr v-for="(pro_item, index) in productInfor" @click="trclick(pro_item)"  @dblclick="gotoilldetails(pro_item)">
										<td>{{index+1}}</td>
										<td>{{pro_item.continentcn}}</td>
										<td>{{pro_item.country}}</td>
										<td>{{pro_item.year}}</td>
										<td>{{pro_item.itemcn}}</td>
										<td>{{pro_item.value}}</td>
										<td>{{pro_item.unitcn}}</td>
									</tr>
								</table>
								<div class="page-cont">
									<div class="totalcont">
										共{{prototalCount}}条
									</div>
									<div class="pagebar">
										<Page :current="propageNo" :page-size="propageSize" :total="prototalCount" show-total  @on-change="productpageChanged" simple />
									</div>
								</div>
							</div>
							<div class="animaltype-cont">
								<RadioGroup v-model="animaltype" @on-change="proChoiseValue">
							        <Radio label="0">活体动物</Radio>
							        <Radio label="1">加工产品</Radio>
							    </RadioGroup>	
							</div>
							<div class="tablecontent-cont" v-if="productInfor==undefined">
								<div class="erro-show-cont">
									<span class="erro-show">暂未查询到数据，请换个条件查询吧！</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="body-left-item2">
					<div class="trade-cont">
						<div class="module-name">
							<span>畜牧贸易</span>
							<div class="choise-cont">
								<Row style="margin-top:2px;">
									<Col span="12">
										<DatePicker type="year" value="2013" placeholder="Select year" style="width: 150px" @on-change="tradeChoiseYear"></DatePicker>
									</Col>
								</Row>
							</div>
						</div>

						<div class="tabletitle-cont">
							<table class="tabletitle" cellspacing="0" cellpadding="0">
								<tr>
									<td> </td>
									<td>大洲</td>
									<td>国家</td>
									<td>产品</td>
									<td>进出口值</td>
					 				<td>单位</td>
								</tr>
							</table>
						</div>
						<div class="tablecontent-cont scorllbar">
							<table class="tablecontent" cellspacing="0" cellpadding="0">
								<tr v-for="(trade, index) in trades">
									<td>{{index+1}}</td>
									<td>{{trade.continentcn}}</td>
									<td>{{trade.country}}</td>
									<td>{{trade.itemcn!=''? trade.itemcn:trade.item}}</td>
									<td>{{trade.value}}</td>
									<td>{{trade.unitcn}}</td>
								</tr>
							</table>
						</div>
						<div class="element-cont">
							<RadioGroup v-model="elementid" @on-change="tradeChoiseValue">
						        <Radio label="5608">进口</Radio>
						        <Radio label="5909">出口</Radio>
						    </RadioGroup>	
						</div>
					</div>
					<div class="disreport-cont">
						<div class="module-name">
							<span>疫病快报</span>
							<div class="choise-cont">
								<Row style="margin-top:2px;">
									<Col span="12">
										<DatePicker type="year" value="2016" placeholder="Select year" style="width: 100px" @on-change="diseaseChoiseYear"></DatePicker>
									</Col>
								</Row>
							</div>
						</div>
						<div class="tabletitle-cont">
							<table class="tabletitle" cellspacing="0" cellpadding="0">
								<tr>
									<td> </td>
									<td>大洲</td>
									<td>国家</td>
									<td>疫病</td>
									<td>报道时间</td>
					 				<td>报道类型</td>
								</tr>
							</table>
						</div>
						<div class="tablecontent-cont scorllbar">
							<table class="tablecontent" cellspacing="0" cellpadding="0">
								<tr v-for="(report, index) in diseasereports">
									<td>{{index+1}}</td>
									<td>{{report.continentcn}}</td>
									<td>{{report.country}}</td>
									<td>{{report.diease}}</td>
									<td>{{report.reportdate}}</td>
									<td>{{getReportTypeStr(report)}}</td>
								</tr>
							</table>
							<div class="page-cont">
								<div class="totalcont">
									共{{diseasetotalCount}}条
								</div>
								<div class="pagebar">
									<Page :current="diseasepageNo" :page-size="diseasepageSize" :total="diseasetotalCount" show-total  @on-change="diseasepageChanged" simple />
								</div>
							</div>
						</div>	
					</div>
					
				</div>
			</div>

			<div class="body-right-cont">
				<div class="body-right-item1">
					<div class="topten-reviews-cont">
						<div class="topten-reviews" v-for="(disease, index) in topDiseases" v-if="index<3">
							<div class="hot"></div><div class="topshow">{{disease.oiednamecn}}/{{disease.count}}</div>
						</div>
					</div>
					<div class="map">
						<pro-special-world-map></pro-special-world-map>
						<!-- <ill-special-map :allcoordinates="allcoordinates"></ill-special-map> -->
					</div>
					<!-- <div class="prompt-cont">
						<div class="prompt-item">
							<div class="ill-first"></div><span>筛选显示爆发点</span>
						</div>
						<div class="prompt-item">
							<div class="first"></div><span>首次爆发点</span>
						</div>
						<div class="prompt-item">
							<div class="middle"></div><span>中间爆发点</span>
						</div>
						<div class="prompt-item">
							<div class="end"></div><span>最后爆发点</span>
						</div>
					</div> -->
				</div>
				<div class="body-right-item2">
					<div class="outbreak-piemap-cont">
						<div class="piemap-cont">
							<span>处理图</span>
							<div class="pie-cont">
								<out-pie-map  :outcoutdata="outcoutdata"></out-pie-map>
							</div>
						</div>
						<div class="pie-data-show">
							<div class="pie-item" v-for="outcoutitem in outcoutdata">
								<div class="item-color-cont"><div class="item-color"></div></div>
								<div class="item-value">
									<span>{{outcoutitem.name}}</span><br/><span>({{outcoutitem.value}})</span>
								</div>
							</div>
						</div>
					</div>
					<div class="outbreak-details-cont">
						<div class="module-name">
							<span>爆发点详情</span>
							<div class="choise-cont">
							</div>
						</div>

						<div class="tabletitle-cont">
							<table class="tabletitle" cellspacing="0" cellpadding="0">
								<tr>
									<td> </td>
									<td>location</td>
									<td>first</td>
									<td>second</td>
					 				<td>atrisk</td>
									<td>cases</td>
									<td>deaths</td>
									<td>killed</td>
								</tr>
							</table>
						</div>
						<div class="tablecontent-cont scorllbar">
							<table class="tablecontent" cellspacing="0" cellpadding="0">
								<tr v-for="(outbreak, index) in coordinates.outbreaks">
									<td>{{index+1}}</td>
									<td>{{outbreak.location}}</td>
									<td>{{outbreak.first}}</td>
									<td>{{outbreak.second}}</td>
									<td>{{outbreak.atrisk}}</td>
									<td>{{outbreak.cases}}</td>
									<td>{{outbreak.deaths}}</td>
									<td>{{outbreak.killed}}</td>
								</tr>
							</table>
						</div>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import request from '../request/prospecial.js'
	import requestView from "../request/viewindex.js";
	import requestSelect from "../request/select.js"
	import echarts from 'echarts';
	// import WorldMap from "./worldmap.vue"
	import ProSpecialWorldMap from "./map/prospecialworldmap.vue"
	import IllSpecialMap from "./map/illspecialmap.vue"
	import AnimalDiseaseMap from "./animaldiseasemap.vue"
	import OutPieMap from "./map/outpiemap.vue"


	
	export default {
		data(){
			return {
				diseaseid: this.$route.query.diseaseid,			//接收主页双击传来的疫病id，作为查询条件
				countryid: this.$route.query.countryid,			//接收主页双击传来的国家id，作为查询条件
				countryvalue: [null,-1],								//大洲--国家
				animalvalue: [-1,-1],							//动物科--动物
				proanimalvalue: [-1,-1],							//动物科--产品
				proyearvalue: [2016],									//时间

				animaltype: '0',								//产品类型（活体动物0,加工产品1）	

				provalue: -1,									//生产对象(鸡，马，牛，羊)存放的itemid
				disyearvalue: [2016],							//日期选择器选择生产时间(年)	

				tradevalue: -1,								//贸易对象(鸡，马，牛，羊)存放的itemid
				tradeyearvalue: [2013],							//日期选择器选择贸易时间(年)
				elementid: '5608',								//进出口值	
				
				countryData: [{value: null, label: '全球'}],		//选择的国家信息，默认为null，全球
				animalData: [{value: -1, label: '全部动物'}],	//选择的动物信息，默认为-1，全部动物(活体动物)
				proanimalData: [{value: -1, label: '全部产品'}],	//选择的产品信息，默认为-1，全部产品(加工产品)
				diseasereports: [],									//生产列表
				trades: [],										//贸易列表
				
				
				propageNo: 1,								//疫病显示列表的页码
				propageSize: 15,							//疫病显示列表每页显示的数量
				prototalCount: 0,	
				tradepageNo: 1,
				trapageSize: 15,
				tradetotalCount: 0,
				diseasepageNo: 1,						//总条数
				diseasepageSize: 15,
				diseasetotalCount: 0,
				oiecountryid: -1,
				allcoordinates: {},		//全部爆发点，作为参数传给illspecialmap，子：coordinates、illcoordinates
				coordinates: {},		//当前点击快报的爆发点，子：outbreak(中间爆发点)outbreakfirst(首次爆发点)outbreakend(最后一次爆发点)outbreaks(全部爆发点)
				illcoordinates: {},		//根据筛选条件所显示的爆发点，子：outbreakfirst
				continents: [],			//从后台查询的大洲-国家信息，处理后赋值给countryData
				epidAnimal: [],		//从后台查询的动物科-动物信息，处理后赋值给animalData
				productInfor: [],		//根据筛选条件查询出的疫病信息，放在搜索栏下方显示
				topDiseases: [],		//与筛选条件相关联的疫病排行前二十(根据当年的报道数量)
				outcoutdata: [],
			}
		},
		mounted(){		//async 异步请求
			this.countryselect();
			this.requestAnimalSelect();
			this.queryProData();
		},
		methods: {
			async gotoilldetails(diseaseitem){
    			// this.$router.push({ path:'/app/:user/illdetails'});
    		},
			//日期选择器的回调函数
			choiseYear(year){
				this.proyearvalue = year;
			},
			diseaseChoiseYear(year){
				this.disyearvalue = year;
				this.queryReportByAnimalfamily();
			},
			tradeChoiseYear(year){
				this.tradeyearvalue = year;
				this.queryTradData();
			},
			// 下拉框选择器回调函数
			proChoiseValue(){
				this.requestAnimalSelect();	
			},
			tradeChoiseValue(){
				this.queryTradData();
			},
			// 疫病列表点击事件(查询爆发点)
			async trclick(report){
				// this.queryoutbreaks(report.primeid)
			},
			// //根据primeid查询爆发点
			// async queryoutbreaks(id){
			// 	var data = await requestView.queryoutbreaks(id);
			// 	this.coordinates = data;
			// 	this.outcoutdata = this.getOutbreakCount();
			// 	this.allcoordinates = {illcoordinates: this.illcoordinates, coordinates: this.coordinates};
			// },
			// //查询生产信息
   //  		async queryproduct(itemid, name, oiecountryid, year){
   //  			var data = await requestSelect.queryproduct(itemid, name, oiecountryid, year);
   //  			this.diseasereports = data.list;
   //  		},
   //  		//查询贸易信息
   //  		async querytrade(elementid ,itemid, name, oiecountryid, year){
   //  			var data = await requestSelect.querytrade(elementid, itemid, name, oiecountryid, year);
   //  			this.trades = data.list;
   //  		},
    		// 主查询
    		async queryProData(){
    			// 如果为动物类型为活体动物则调用活体动物的接口查询活体动物
    			if (this.animaltype == 0) {
    				var data = await request.queryProData(this.propageNo, this.propageSize, this.animalvalue[0], this.animalvalue[1], this.countryvalue[0], this.countryvalue[1], this.proyearvalue);
    				this.productInfor = data.list;
    				this.prototalCount = data.totalCount;
    			}
    			// 如果为加工产品则调用查询加工产品的接口
    			else if (this.animaltype == 1) {
    				var data = await request.queryProducttion(this.propageNo, this.propageSize, this.proanimalvalue[0], this.proanimalvalue[1], this.countryvalue[0], this.countryvalue[1], this.proyearvalue);
    				this.productInfor = data.list;
    				this.prototalCount = data.totalCount;
    			}
    			this.queryTradData();
    			this.queryReportByAnimalfamily();
    		},
    		// 根据筛选条件查询贸易详情
    		async queryTradData(){
    			if (this.animaltype == 0) {
    				var data = await request.queryTradData(this.propageNo, this.propageSize, this.elementid, this.animalvalue[0], this.animalvalue[1], this.countryvalue[0], this.countryvalue[1], this.tradeyearvalue);
    				this.trades = data.list;
    				this.tradetotalCount = data.totalCount;
    			}
    			// 如果为加工产品则调用查询加工产品的接口
    			else if (this.animaltype == 1) {
    				var data = await request.queryTradeProduct(this.propageNo, this.propageSize,this.elementid, this.proanimalvalue[0], this.proanimalvalue[1], this.countryvalue[0], this.countryvalue[1], this.tradeyearvalue);
    				this.trades = data.list;
    				this.tradetotalCount = data.totalCount;
    			}
    		},
    		// 根据筛选条件的动物科查询疫病
    		async queryReportByAnimalfamily(){
    			var data = await request.queryReportByAnimalfamily(this.animalvalue[0], this.countryvalue[0], this.countryvalue[1], this.disyearvalue, this.diseasepageNo, this.diseasepageSize);
    			this.diseasereports = data.list;
    			this.diseasetotalCount = data.totalCount;
    		},
    		
    		//查询大洲-国家
    		async countryselect(){
    			var data = await requestSelect.countryselect();
    			this.continents = data;

    			this.getCountryData()
    		},
    		//查询动物科-动物
    		async requestAnimalSelect(){
    			var data = await request.requestaniamlselect(this.animaltype);
    			this.epidAnimal = data;
    			this.getAnimalData();
    		},
    		// 大洲-国家格式标准化
    		getCountryData(){
				for (var i = 0; i < this.continents.length; i++) {
					var obj={};
					Object.assign(obj,{
						value: this.continents[i].continentcn,
						label: this.continents[i].continentcn,
						children: [{value:-1, label:'当前大洲'}],
					});
					for (var j = 0; j < this.continents[i].countrys.length; j++) {
						obj.children.push({value: this.continents[i].countrys[j].id, label: this.continents[i].countrys[j].shortnamecn,})
					}
					this.countryData.push(obj);
				}
			},
			// 动物科-动物格式标准化
			getAnimalData(){
				for (var i = 0; i < this.epidAnimal.length; i++) {
					var obj={};
					Object.assign(obj,{
						value: this.epidAnimal[i].id,
						label: this.epidAnimal[i].oiefnamecn,
						children: [{value:-1, label:'当前科'}],
					});
					if (this.epidAnimal[i].faoitems != undefined) {
						for (var j = 0; j < this.epidAnimal[i].faoitems.length; j++) {
						obj.children.push({value: this.epidAnimal[i].faoitems[j].faoid, label: this.epidAnimal[i].faoitems[j].namecn,})
						}
						if (this.animaltype == 0) {
							this.animalData.push(obj);
						}else {
							this.proanimalData.push(obj);
						}
						
					}
				}
			},
			// //爆发点数据统计
			// getOutbreakCount(){
			// 	var arr = [{name:'atrisk',value:0},
			// 		{name:'cases',value:0},
			// 		{name:'deaths',value:0},
			// 		{name:'killed',value:0}];
			// 	for (var i = 0; i < this.coordinates.outbreaks.length; i++) {
			// 		arr[0].value += this.coordinates.outbreaks[i].atrisk;
			// 		arr[1].value += this.coordinates.outbreaks[i].cases;
			// 		arr[2].value += this.coordinates.outbreaks[i].deaths;
			// 		arr[3].value += this.coordinates.outbreaks[i].killed;
			// 	}
			// 	return arr;
			// },
			// 报道类型格式标准化
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
			// 页码改变函数
		    async productpageChanged(page) {
		    	this.propageNo = page;
		     	await this.queryProData();
		    },
		    async diseasepageChanged(page){
		    	this.diseasepageNo = page;
		     	await this.queryReportByAnimalfamily();
		    }

		},
		components: {
			// IllSpecialMap,
			ProSpecialWorldMap,
			OutPieMap,
		}
	}
</script>