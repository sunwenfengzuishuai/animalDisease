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
	
	/* 左半边部分内容start */
	.body-left-cont{
		width: 48%;
		height: 100%;
	}
		/* 疫病列表start */
		.body-left-item1{
			width: 100%;
			height: 60%;
			margin-bottom: 10px;
			background-color: rgba(24, 24, 64, 0.8);
			box-sizing: border-box;
  			border: solid 1px #58e7e7;
  			border-radius: 10px;
		}
		/* 疫病列表end */
		/* 畜牧生产贸易列表start */
		.body-left-item2{
			width: 100%;
			height: 40%;
			display: flex;
			background-color: rgba(24, 24, 64, 0.8);
			box-sizing: border-box;
  			border: solid 1px #58e7e7;
  			border-radius: 10px;
		}
		.product-cont{
			width: 50%;
			height: 100%;
			box-sizing: border-box;
			border-right: solid 1px #58e7e7;
		}
		.trade-cont{
			width: 50%;
			height: 100%;	
		}
		/* 畜牧生产列表end */
	/* 左半边部分内容end */

	/* 右半边部分内容start */
	.body-right-cont{
		width: 52%;
		height: 100%;
		margin-left: 20px;
	}
		/* 地图展示部分start */
			.body-right-item1{
				width: 100%;
				height: 69%;
				background-color: pink;
				overflow: hidden;
				position: relative;
				margin-bottom: 10px;
				background-color: rgba(24, 24, 64, 0.8);
				box-sizing: border-box;
	  			border: solid 1px #58e7e7;
	  			border-radius: 10px;
			}
			.map-pie-chart{
				width: 20vh;
				height: 20vh;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 999;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}
			.pie-chart{
				width: 18vh;
				height: 18vh;
				border-radius: 50%;
				margin: 0 auto;
				background-color: lightgoldenrodyellow;
			}
		/* 地图展示部分end */
		/* 数据图像化展示部分start */
			.body-right-item2{
				width: 100%;
				height: 31%;
				background-color: lightcoral;
				background-color: rgba(24, 24, 64, 0.8);
				box-sizing: border-box;
				border: solid 1px #58e7e7;
				border-radius: 10px;
			}
		/* 数据图像化展示部分end */
	/* 右半边部分内容end */
</style>

<template>
	<div class="main-containner">
		<header class="header">
			<span>贸易专题</span>
		</header>
		<div class="body-containner">
			<div class="body-left-cont">
				<div class="body-left-item1">
					
				</div>
				<div class="body-left-item2">
					<div class="product-cont">
						
					</div>
					<div class="trade-cont">
						
					</div>
				</div>
			</div>

			<div class="body-right-cont">
				<div class="body-right-item1">
					<div class="map-pie-chart">
						<div class="pie-chart"></div>
					</div>
					<div class="map">
						<world-map :coordinates="coordinates"></world-map>
					</div>
				</div>
				<div class="body-right-item2">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import request from "../request/viewindex.js";
	import echarts from 'echarts';
	import WorldMap from "./worldmap.vue"
	import IllBarCont from "./illbarcont.vue"
	import IllLineCont from "./illlinecont.vue"
	
	export default {
		data(){
			return {
				message: "123456",
				maxnum: 1,
				outbreaks: [],
				animproducts: [],
				trades: [],
				illnesses: [],
				coordinates: {},
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
				oiecountryid: -1,
				choise: 'illbar',
				classObject1: {
					active: true,
    				normal: false
				},
				classObject2: {
					active: false,
    				normal: true
				},
			}
		},
		mounted(){		//async 异步请求
			/*this.drawLine();*/
			this.queryreport();
      		this.queryproduct();
      		this.querytrade();
      		// this.querydisease();
		},
		methods: {
			barClick(){
				this.choise = 'illbar';
				this.classObject1.active = true;
				this.classObject1.normal = false;
				this.classObject2.active = false;
				this.classObject2.normal = true;
			},
			lineClick(){
				this.choise = 'illline';
				this.classObject1.active = false;
				this.classObject1.normal = true;
				this.classObject2.active = true;
				this.classObject2.normal = false;
			},
			async trclick(outbreak){
				console.log(outbreak.reportid);
				var data = await request.queryoutbreaks(outbreak.primeid);
				this.coordinates = data;
				this.oiecountryid = outbreak.oiecountryid;
				console.log(this.coordinates.outbreak);
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
			IllBarCont,
			IllLineCont,
		}
	}
</script>