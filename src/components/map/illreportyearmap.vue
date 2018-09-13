<template>
	<div id="reportyear"></div>
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
	}
</style>

<script>
	import echarts from 'echarts';
	import request from '../../request/illdetails.js'

	export default {
		props: {
			diseasData: {
				type: Array,
				default: null
			},
			diseasevalue: {
				type: Number,
				default: 0
			},
      diseasename:{
			  type: String
      }
		},
		watch: {
			diseasevalue: function(newValue, oldValue){
				this.getNameById(newValue);
				this.years = [];
				this.counts = [];
				this.queryReportYear();
			}
		},
		data() {
			return {
				reportcountdata: [],
				years: [],
				counts: [],
				diseaseName: '非洲猪瘟',
			}
		},
		mounted() {
      //console.log(this.diseasename)
      this.diseaseName = this.diseasename
      this.getNameById(this.diseasevalue);
			this.queryReportYear();

		},
		methods: {
			async queryReportYear(){
    			var data = await request.queryReportYear(this.diseasevalue);
    			this.reportcountdata = data;
    			this.getLineData();
    			this.drawLine();
			},
			// 提取绘图所需信息
			getLineData(){
				for (var i = 0; i < this.reportcountdata.length; i++) {
					var year = parseInt(this.reportcountdata[i].date);
					this.years.push(year);
					this.counts.push(this.reportcountdata[i].count);
				}
			},

			// 根据id匹配疫病名称
			getNameById(id){
				for (var i = 0; i < this.diseasData.length; i++) {
					if (this.diseasData[i].value == id) {
						this.diseaseName = this.diseasData[i].label;
					}
				}
			},

			// 绘制快报-年折线图
			async drawLine() {

				var chart = echarts.init(document.getElementById("reportyear"));

				var option = {
			        // 定义样式和数据
			        // backgroundColor: '#FBFBFB',
			        tooltip: {
			            trigger: 'axis',
			            align:'left',
			        },
			        legend: {
			            data: [this.diseaseName],
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
			            data: this.years,
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
			        series: [{
			            name: this.diseaseName,
			            type: 'line',
			            symbol: 'none',
			            smooth: 0.3,
			            color: ['#66AEDE'],
			            data: this.counts,
			        }]
			    };

				// var option = {
				//     xAxis: {
				// 	    type: 'category',
				// 	    data: ['01.23', '01.24', '01.25', '01.26', '01.27', '01.28', '01.29'],
				// 	    boundaryGap: ['10%', '10%'],//坐标轴两边留白  //false不留白
				// 	    axisLine: {//坐标轴
				// 	        lineStyle:{
				// 	            // opacity: 0.01,//设置透明度就可以控制显示不显示
				// 	            color: '#fff',
				// 	        },
				// 	    },
				// 	    splitLine: {//网格线
				// 	        show: false,//网格线
				// 	        lineStyle:{
				// 	            color: '#ffffff',
				// 	        },
				// 	    },
				// 	    axisTick: {//刻度线
				// 	        show: false,//去掉刻度线
				// 	        lineStyle:{
				// 	            color: '#ffffff',
				// 	        },
				// 	    },
				// 	},
				//     yAxis: {
				// 	    min:0,//最小刻度
				// 	    max:25,//最大刻度
				// 	    type: 'value',
				// 	    name:'℃         ',//是基于Y轴线对齐，用空格站位让坐标轴名称与刻度名称对齐
				// 	    nameTextStyle: {
				// 	        color:'#fff',
				// 	        align:'left',//文字水平对齐方式
				// 	        verticalAlign:'middle',//文字垂直对齐方式
				// 	    },
				// 	    axisTick: {//刻度线
				// 	        show: false,//去掉刻度线
				// 	    },
				// 	    axisLine: {//坐标轴线
				// 	        lineStyle:{
				// 	            // opacity: 0.01,//设置透明度就可以控制显示不显示
				// 	            color: '#fff',
				// 	        },
				// 	    },
				// 	    splitLine: {//网格线
				// 	        // show: false,//网格线
				// 	        lineStyle:{
				// 	            color: '#eeeeee',
				// 	        },
				// 	    },
				// 	},
				//     series: [{
				// 	    data: [15, 14, 10, 11, 14.58, 10, 11.5,],//数据
				// 	    type: 'line',//图表类型，折线图还是柱状图还是饼图
				// 	    label: {//图形上的文本标签
				// 	        normal:{
				// 	            formatter: '{@data}℃',
				// 	            show: true,//显示数据
				// 	            color: '#00af58',
				// 	            position: 'top',
				// 	            fontSize:'14',
				// 	        },
				// 	    },
				// 	    itemStyle: {//折线拐点标志的样式。
				// 	        normal: {
				// 	            color: '#00af58',
				// 	        },
				// 	    },
				// 	    areaStyle: {//区域填充样式
				// 	        normal:{
				// 	            color: {
				// 	                type:'linear',
				// 	                x: 0,
				// 	                y: 0,
				// 	                x2: 0,
				// 	                y2: 1,
				// 	                colorStops: [
				// 	                    {
				// 	                        offset: 0,
				// 	                        color: 'rgba(0, 175, 88, 0.4)',
				// 	                    },
				// 	                    {
				// 	                        offset: 1,
				// 	                        color: 'rgba(0, 175, 88, 0.01)',
				// 	                    },
				// 	                ],
				// 	                globaCoord: false,
				// 	            },
				// 	   //          color: {
				// 				//     type: 'linear',
				// 				//     x: 0,
				// 				//     y: 0,
				// 				//     x2: 0,
				// 				//     y2: 1,
				// 				//     colorStops: [{
				// 				//         offset: 0, color: 'red' // 0% 处的颜色
				// 				//     }, {
				// 				//         offset: 1, color: 'blue' // 100% 处的颜色
				// 				//     }],
				// 				//     globalCoord: false // 缺省为 false
				// 				// },
				// 	        },
				// 	    },
				// 	},],
				// };
				// 使用刚指定的配置项和数据显示图表。
				chart.setOption(option);
				// 屏幕自适应
				setTimeout(function (){
	        	    window.onresize = function () {
	        	    	chart.resize();
	        	    	chart.resize();
	        	    }
	        	},200)
			},
		}
	}
</script>
