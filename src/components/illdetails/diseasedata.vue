
<style scoped>
	/* 疫病情况show */
	.disease-show-cont{
		width:100%;
		height: 100%;
		color: #fff;
		padding-left: 0px;
		display: flex;
		flex-direction: column;
	}
	.disease-name-cont{
		/* padding-top: 5px; */
		line-height: 40px;
		height: 40px;
		width: 100%;
		font-size: 1.2em;
		display: flex;
		justify-content: space-between;
		color: #ddd;
	}
	.disease-name{
		padding-left: 20px;
		width: 98%;
		background: url('../../assets/box_title.png');
	}
	.name-line{
		width: 5px;
		height: 100%;
		background-color: #136AAB;
	}
	.line-bar-cont{
		height: 100%;
		width: 100%;
		padding-left: 8px;
		padding-top: 1%;
		display: flex;
		flex-direction: column;
		background: url('../../assets/bg_img03.png');
	}
	.lin-bar-item{
		display: flex;
		height: 70px;
	}
	.lin-bar-item span{
		display: inline-block;
		line-height: 70px;
		font-size: 1.2em;
		width: 68px;
		flex-shrink: 0;
	}
	.lin-bar{
		width: 80%;
		height: 22px;
		margin-left: 8px;
		margin-right: 10px;
		margin-top: 24px;
	}
	.line-mask{
		height: 100%;
	}
	.lin-bar-item:nth-child(1) .lin-bar{
		background-color: rgba(15, 162, 255, 0.4);
	}
	.lin-bar-item:nth-child(2) .lin-bar{
		background-color: rgba(232, 187, 24, 0.4);
	}
	.lin-bar-item:nth-child(3) .lin-bar{
		background-color: rgba(175,67, 220, 0.4);
	}
	.lin-bar-item:nth-child(1) .line-mask{
		background-color: rgba(15, 162, 255, 1.0);
	}
	.lin-bar-item:nth-child(2) .line-mask{
		width: 50%;
		background-color: rgba(232, 187, 24, 1.0);
	}
	.lin-bar-item:nth-child(3) .line-mask{
		width: 90%;
		background-color: rgba(175,67, 220, 1.0);
	}
	/* 疫病情况end */
</style>

<template>
	<div class="disease-show-cont">
		<div class="disease-name-cont">
			<div class="disease-name">
				<span>病名:</span><span>{{isSelectDis?diseaseName:diseasename}}</span>
			</div>
			<div class="name-line"></div>
		</div>
		<div class="line-bar-cont">
			<div class="lin-bar-item">
				<span>分布率：</span>
				<div class="lin-bar">
					<div class="line-mask" :style="'width:'+countryWidthNum+'%;'"></div>
				</div>
			</div>
			<div class="lin-bar-item">
				<span>占比率：</span>
				<div class="lin-bar">
					<div class="line-mask" :style="'width:'+reportWidthNum+'%;'"></div>
				</div>
			</div>
			<div class="lin-bar-item">
				<span>死亡率：</span>
				<div class="lin-bar">
					<div class="line-mask"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
			yearvalue: {
				type: String,
				default: null
			},
			totalCount: {
				type: Number,
				default: 0
			},
      diseasename:{
        type: String,
        default: null
      }
		},
		watch: {
			// diseasevalue: function(newValue, oldValue){
			// 	this.getNameById(newValue);
			// },
      diseasData:{
        handler: function (val, oldVal) {
          //console.log(val+'------')
          this.getNameById(val);
        },
        deep: true
      },
      diseasevalue: {
        handler: function (val, oldVal) {
          //console.log(val+'------')
          this.getNameById(val);
        },
        // deep: true
      },
			totalCount: function(newValue, oldValue){
				this.queryReportCountYear();
			},
		},
		data () {
            return {
            	diseaseName: '非洲猪瘟',
            	cuntrycountdata: [],
            	countryWidthNum: 0,
            	reportWidthNum: 0,
            	deathWidrhNum: 0,
              isSelectDis: false,
            }
        },
		mounted(){		//async 异步请求
      //console.log(this.diseasData)
      this.getNameById(this.diseasevalue);
			this.queryCuntryCountYear()
		},
		methods: {
			// 根据id匹配疫病名称
			getNameById(id){

        for (var i = 0; i < this.diseasData.length; i++) {
					if (this.diseasData[i].value == id) {
            this.isSelectDis = true;
						this.diseaseName = this.diseasData[i].label;
						// alert(this.diseaseName)
					}
				}
			},
			getCountryWidth(){
				for (var i = 0; i < this.cuntrycountdata.length; i++) {
					if (this.cuntrycountdata[i].date == this.yearvalue) {
						var count = this.cuntrycountdata[i].count;
						this.countryWidthNum = (count/244*100).toFixed(2);
					}
				}
			},
			// queryReportCountYear(){
			// 	var reportCount = this.queryReportCountYear();
   //  			console.log(reportCount);

			// 	var count = this.totalCount/reportCount*100;
			// 	this.reportWidthNum = count.toFixed(2);
			// },

			async queryCuntryCountYear(){
    			var data = await request.queryCuntryCountYear(this.diseasevalue);
    			this.cuntrycountdata = data;
    			this.getCountryWidth();
			},
			async queryReportCountYear(){
    			var data = await request.queryReportCountYear(this.yearvalue);
    			var reportCount = data[0].count;
    			var count = this.totalCount/reportCount*100;
				this.reportWidthNum = count.toFixed(2);
				//console.log(this.reportWidthNum);
			},


		},
		components: {
		}
	}
</script>
