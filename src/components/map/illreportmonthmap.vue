<template>
	<div id="reportmonth"></div>
</template>

<style scoped>
	html, body, div{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	#illpiemap{
		width: 100%;
		height: 100%;
		padding: 4px;
		background-color: #fff;
	}
</style>

<script>
	import echarts from 'echarts';
	import request from '../../request/illdetails.js'

	export default {
		props: {
			diseasevalue: {
				type: Number,
				default: 0
			},
			choiceid: {
				type: Number,
				default: 0
			},
		},
		watch: {
			diseasevalue: function(newValue, oldValue){
				this.queryReportMonth();		
			},
			choiceid: function(newValue, oldValue){
				this.setSeries();
    			this.drawLine();
    			this.mapseries = [];	
			}
		},
		data() {
			return {
				years: [],
				allcounts: [],
				illdata: [],
				mapseries: [],
				// mapcolor: ['#bd2158', '#c71585', '#800080', '#3366cc', '#0080ff', '#1f9baa', '#24998d', '#219167', '#3f9337', '#99cc33', '#cdd541', '#ffff00', '#fbb417', '#f6941d', '#eb4310', '#ff0000',],
				mapcolor: ['#3366cc', '#3f9337', '#ffff00', '#f6941d', '#eb4310', '#ff0000'],
				groupyears: [],
				groupcounts: [],
			}
		},
		mounted() { 
			this.queryReportMonth();
		},
		methods: {

			async queryReportMonth(){
    			var data = await request.queryReportMonth(this.diseasevalue);
    			this.reportcountdata = data;
    			this.getSeries();
    			this.setSeries();
    			this.drawLine();
    			this.mapseries = [];
			},
			// 获取年份信息
			getYear(){
				var yeararr = [];
				for (var i = 0; i < this.reportcountdata.length; i++) {
					var reportdate = this.reportcountdata[i].date;
					var year = reportdate.substr(0,4);
					yeararr.push(year); 
				}
				return yeararr;
			},
			// 获取counts,与年一一对应
			getData(){
				for (var i = 0; i < this.years.length; i++) {
					var counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
					for (var j = 0; j < this.reportcountdata.length; j++) {
						var reportdate = this.reportcountdata[j].date;
						var year = reportdate.substr(0,4);
						var month = parseInt(reportdate.substr(5,2));
						if (year == this.years[i]) {
							 counts[month-1] = this.reportcountdata[j].count;
						}
					}
					this.allcounts.push(counts)
				}
			},
			
			// 获取传递给绘图的数据
			getSeries(){
				this.years = this.getSpliceArray(this.getYear());
    			this.getData();
    			this.groupyears = this.chunk(this.years, 5);
    			this.groupcounts = this.chunk(this.allcounts, 5);
    			this.$emit("getgroupyears", this.groupyears);
    			// console.log(this.mapseries);
			},
			setSeries(){
				for (var i = 0; i < this.groupyears[this.choiceid].length; i++) {
    				var obj = {};
    				Object.assign(obj,{
						name: this.groupyears[this.choiceid][i],
						type: 'line',
						symbol: 'none',
						smooth: 0.3,
						color: this.mapcolor[i],
						data: this.groupcounts[this.choiceid][i]
					});
					this.mapseries.push(obj);
    			}
			},

//....................工具方法.................................//
			// 分组
			chunk(arr, size) {
				var arr2=[];
				for(var i=0;i<arr.length;i=i+size){
					arr2.push(arr.slice(i,i+size));
				}
				return arr2;
			},
			// 数组去重
			getSpliceArray(arr){
				for (var i = 0; i < arr.length; i++) {
					for (var j = 0; j < arr.length; j++) {
						if (arr[i] == arr[j] && i != j) {
							arr.splice(j,1);
							i--;
						}
					}
				}
				return arr;
			},

			async drawLine() {

				var chart = echarts.init(document.getElementById("reportmonth"));
				
				var option = {
			        // 定义样式和数据
			        // backgroundColor: '#FBFBFB',
			        tooltip: {
			            trigger: 'axis',
			            align:'left',
			        },
			        legend: {
			            data: this.years,
			            x: 'left',
			            y: 'top',
			            padding: [15,0,0,20],
			            textStyle: {
			                color: '#eee',
			            }
			        },
			        calculable: true,

			        xAxis: [{
			            axisLabel: {
			                rotate: 30,
			                interval: 0
			            },
			            axisLine: {
			                lineStyle: {
			                    color: '#eee'
			                }
			            },
			            type: 'category',
			            boundaryGap: false,
			            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
			        }],
			        yAxis: [{
			      //   	name:'报道数',//是基于Y轴线对齐，用空格站位让坐标轴名称与刻度名称对齐
					    // nameTextStyle: {
					    //     color:'#fff',
					    //     align:'left',//文字水平对齐方式
					    //     verticalAlign:'middle',//文字垂直对齐方式
					    // },
			            type: 'value',
			            axisLine: {
			                lineStyle: {
			                    color: '#CECECE'
			                }
			            }
			        }],
			        series: this.mapseries,
			    };
				// 使用刚指定的配置项和数据显示图表。
				chart.setOption(option);
				// 屏幕自适应
				setTimeout(function (){
	        	    window.onresize = function () {
	        	    	chart.resize();
	        	    }
	        	},200)
			},
		}
	}
</script>