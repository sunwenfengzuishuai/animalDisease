<template>
	<div id="outpiemap"></div>
</template>

<style scoped>
	#outpiemap{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';

	export default {
		props: {
			outcoutdata: {
				type: Array,
				default: null
			},
		},
		watch: {
			outcoutdata: function(newValue, oldValue){
				this.drawLine(newValue);		
			}
		},
		data() {
			return {
				// outcoutdata:[
	   //              {name:'直接访问', value:335},
	   //              {name:'邮件营销', value:310},
	   //              {name:'联盟广告', value:234},
	   //              {name:'视频广告', value:135},
	   //          ]
			}
		},
		mounted() { 
			// alert(this.outcoutdata)
			// console.log(this.outcoutdata)
			this.drawLine(this.outcoutdata)
		},
		methods: {
			async drawLine(outcoutdata) {
				console.log(outcoutdata);
				var chart = echarts.init(document.getElementById("outpiemap"));
				
				//this.makeMapData(rawData);
				 var option = {
				    // legend: {
				    //     orient: 'vertical',
				    //     x: 'left',
				    //     data:this.outbreakdata,

				    // },
				    series: [
				        {
				            type:'pie',
				            // roam: true, 
				            radius: ['0%', '94%'],
				            color: ['#ff0000','#ff4400','#ff8800','#ffcc00','#dddd00'],
				            hoverAnimation: false,
				            data: outcoutdata,
				            itemStyle:{ 
					            normal:{ 
					                label:{ 
						                show: false,
					                    position: "inner",
					                    textStyle: {                // 标签文本样式
				                            fontSize: 12,
				                            fontWeight: "normal",     // 标签字体加粗,'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
				                            color: '#aaa',
				                        },
								      	formatter: '{b} : {c}' 
					                }, 
					                labelLine:{show:false} 
					            } 
					        } 
				        }
				    ]
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