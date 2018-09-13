<template>
	<div id="main"></div>
</template>

<style scoped>
	#mian{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';
	import world from '../assets/js/world.js';
	export default {
		props: {
			coordinates: {
				type: Object,
				default: null
			},
		},
		watch: {
			coordinates: function(newValue, oldValue){
				// console.log(newValue);
				this.drawLine(newValue);		
			}
		},
		data() {
			return {
			}
		},
		mounted() { 
			this.drawLine(this.coordinates)
		},
		methods: {
			// btnClick(){
			// 	this.mapa = this.coordinates;
			// 	this.drawLine(this.mapa)
			// },
			async drawLine(mapData) {

				var chart = echarts.init(document.getElementById("main"));
				

				
				//this.makeMapData(rawData);
				var option = {
					backgroundColor: new echarts.graphic.RadialGradient(0.5, 0.5, 0.4, [{
						offset: 0,
						color: '#4b5769'
					}, {
						offset: 1,
						color: 'rgba(24, 24, 64, 0.2)'
					}]),
					title: {
						// text: this.data,
						// subtext: 'data from macrofocus',
						//sublink: 'https://www.macrofocus.com/public/products/infoscope/datasets/pricesandearnings/',
						left: 'center',
						top: 5,
						itemGap: 0,
						textStyle: {
							color: '#eee'
						},
						z: 200
					},
					geo: {
						map: 'world',
						silent: true,
						label: {
							emphasis: {
								show: false,
								areaColor: '#eee'
							}
						},
						itemStyle: {
							normal: {
								borderWidth: 0.2,
								borderColor: '#404a59'
							}
						},

						roam: true

					},
					series: [
					// {
			  //           name: 'World Population (2010)',
			  //           type: 'map',
			  //           mapType: 'world',
			  //           roam: true,
			  //           itemStyle:{
			  //               emphasis:{label:{show:true}}
			  //           }
			  //       },
					{
						name: 'Prices and Earnings 2012',
						type: 'scatter',
						coordinateSystem: 'geo',
						data: mapData.outbreak,
						activeOpacity: 1,
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: false
							},
							emphasis: {
								show: true
							}
						},
						symbolSize: 10,
						itemStyle: {
							normal: {
								borderColor: '#fff',
								color: '#ff3300',
							}
						}
					},
					{
						name: 'Prices and Earnings 2012',
						type: 'scatter',
						coordinateSystem: 'geo',
						data: mapData.outbreakend,
						activeOpacity: 1,
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: false
							},
							emphasis: {
								show: true
							}
						},
						symbolSize: 10,
						itemStyle: {
							normal: {
								borderColor: '#fff',
								color: '#ff33ff',
							}
						}
					},
					{
						name: 'Prices and Earnings 2012',
						type: 'scatter',
						coordinateSystem: 'geo',
						data: mapData.outbreakfrist,
						activeOpacity: 1,
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: false
							},
							emphasis: {
								show: true
							}
						},
						symbolSize: 10,
						itemStyle: {
							normal: {
								borderColor: '#fff',
								color: '#0000ff',
							}
						}
					},]
				};

				// 使用刚指定的配置项和数据显示图表。
				chart.setOption(option);

			},

		}
	}
</script>