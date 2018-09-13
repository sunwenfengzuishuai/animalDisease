<template>
	<div id="mian"></div>
</template>

<style scoped>
	#mian{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';
	import world from '../../assets/js/world.js'

	export default {
		props: {
			allcoordinates: {
				type: Object,
				default: null
			},
		},
		watch: {
			allcoordinates: function(newValue, oldValue){
				// console.log(newValue);
				// alert(newValue);
				this.drawLine(newValue);		
			},
		},
		data() {
			return {
				mapa:[
				 {name:"Saveni",
				 value:[ 26.8592,47.9585,119.1, 120.3, 110, 102.5, 131.1, 132.4, 1887, 23, 12, 5, 5, 22, 1250, 1.047, 0.732, 2.43, -0.476, 0.685, 0.228, 100, 704, 1130, 2551, 5130, 4.66, 68.47, 28.93, 45200, 426, 2.01, 90, 280, 630, 1100, 1190, 4481, 2499, 33.4, 42.7, 21, 104600, 90700, 68900, 61800, 79800, 69900, 137200, 130000, 115700, 96900, 71100, 61400, 53200, 58900, 140400, 140400]}
				],
			}
		},
		mounted() { 
			this.drawLine(this.allcoordinates)
	
		},
		methods: {
			async drawLine(allcoordinates) {

				var chart = echarts.init(document.getElementById("mian"));
				
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
				        {
				            name: 'all ill outbreaks show',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: allcoordinates.illcoordinates.outbreakfrist,
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
				                    color: '#880000',
				                }
				            }
				        },

				        {
				            name: 'report ill outbreaks show',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: allcoordinates.coordinates.outbreak,
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
				                    color: '#ff6600',
				                }
				            }
				        },
				        {
				            name: 'report ill outbreaks show',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: allcoordinates.coordinates.outbreakend,
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
				                    color: '#ffff00',
				                }
				            }
				        },
				        {
				            name: 'report ill outbreaks show',
				            type: 'scatter',
				            coordinateSystem: 'geo',
				            data: allcoordinates.coordinates.outbreakfrist,
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
				                    color: '#ff0000',
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