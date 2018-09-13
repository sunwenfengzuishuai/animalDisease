<template>
	<div id="illpiemap"></div>
</template>

<style scoped>
	#illpiemap{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';

	export default {
		props: {
			pieCountCon: {
				type: Array,
				default: null
			},
		},
		watch: {
			pieCountCon: function(newValue, oldValue){
				this.drawLine(newValue);		
			}
		},
		data() {
			return {
			}
		},
		mounted() { 
			this.drawLine(this.pieCountCon)
		},
		methods: {
			async drawLine(mydata) {

				var chart = echarts.init(document.getElementById("illpiemap"));
				
				var option = {
				    // legend: {
				    //     orient: 'vertical',
				    //     x: 'left',
				    //     data:this.outbreakdata,

				    // },
				    series: [
				        {
				            type:'pie',
				            radius: ['62%', '80%'],
				            color: ['#AE43DC','#ff0000','#ff6600','#E8BB18','#4bC65e','#0f2aff'],
				            hoverAnimation: false,
				            data: mydata,
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
			},
		}
	}
</script>