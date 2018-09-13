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
	import bus from '../../assets/js/eventBus.js'

	export default {
		props: {
			allcoordinates: {
				type: Object,
				default: null
			},
		},
		watch: {
			allcoordinates: function(newValue, oldValue){
				this.drawLine(newValue);		
			},
		},
		data() {
			return {
				
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
				    // title: {
				    //     left: 'center',
				    //     top: 5,
				    //     itemGap: 0,
				    //     textStyle: {
				    //         color: '#0e0'
				    //     },
				    //     z: 200
				    // },
				    geo: {
				        map: 'world',
				        silent: true,
				        label: {
				            emphasis: {
				                show: false,
				                areaColor: '#0e0'
				            }
				        },
				        itemStyle: {
				            normal: {
				                borderWidth: 0.6,
				                borderColor: '#505a69',
				                areaColor: '#A2D6fe'
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
				setTimeout(function (){
	        	    window.onresize = function () {
	        	    	chart.resize();
	        	    }
	        	},200)

			},

		}
	}
</script>