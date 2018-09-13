<style>
	.ivu-modal-content{
		background: url('../../assets/main-background.jpg');
		background-size: cover;
		box-shadow:0px 0px 50px 10px #032d60 inset;
	}
	.ivu-modal-header-inner{
		color: #fff;
	}
	.ivu-modal-header{

		border-bottom: none; /* 1px solid #032d60 */
		box-shadow:0px 0px 20px 5px #032d60 inset;
	}
	.ivu-modal-footer{
		border-top: none;
		/* box-shadow:0px 0px 10px 2px #032d60 inset; */
	}
</style>

<style scoped>
	html, body{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	/* 疫病情况show */
	.reporte-show-cont{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.tabletitle-cont{
		width: 100%;
		height: 36px;
		line-height: 36px;
		flex-shrink: 0;
		background-color: rgba(22, 60, 108, 0.6);
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
		/* padding-top: 0.5%; */
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
	table td:nth-child(3){
		width: 24%;
	}
	table td:nth-child(4){
		width: 24%;
	}
	table td:nth-child(5){
		width: 24%;
	}
	table td:nth-child(1){
		width: 5%;
	}
	.tabletitle tr td{
		font-size: 0.8em;
		color: #ddd;
	}
	.tablecontent tr{
		height: 25px;
		line-height: 25px;
		width: 100%;
	}
	/* .tablecontent tr:nth-child(2n-1){
		background-color: #122648;
	} */
	.tablecontent tr:hover{
		background-color: #4666ee;
		cursor: pointer;
	}
	.erro-show-cont{
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: lightskyblue;
		font-size: 1.6em;
		height: 100%;
	}
	.erro-show{
		text-align: center;
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
	/* 分页end */

	/* 弹窗 */
	.report-show{
		/* box-shadow:0px 0px 50px 10px #032d60 inset;  */
	}
	.report-show p{
		display: flex;
		height: auto;
		border-left: 1px solid #051E39;
		border-right: 1px solid #051E39;
		margin: 0;
	}
	.report-show span{
		display: block;
		width: 100%;
		text-align: left;
		padding: 5px 20px;
		border: 1px solid #051E39;
		font-size: 1.1em;
		font-weight: 700;
		color: #fff;
	}
	.report-show p:first-child{
		border-top: 1px solid #051E39;
	}
	.report-show p:last-child{
		border-bottom: 1px solid #051E39;
	}
	.report-show .title{
		flex-shrink: 0;
		width: 150px;
		text-align: right;
		color: #58e7e7;
	}
	/* 疫病情况end */
</style>

<template>
	<div class="reporte-show-cont">
		<div class="tabletitle-cont">
			<table class="tabletitle" cellspacing="0" cellpadding="0">
				<tr>
					<td> </td>
					<!-- <td>大洲</td> -->
					<td>国家</td>
					<td>开始时间</td>
	 				<td>报道时间</td>
					<td>类型</td>
				</tr>
			</table>
		</div>
		<div class="tablecontent-cont scorllbar" v-if="diseaseInfor!=undefined">
			<table class="tablecontent" cellspacing="0" cellpadding="0">
				<tr v-for="(disease_item, index) in diseaseInfor" @click="trclick(disease_item)"  @dblclick="getReportObj(disease_item)">
					<td>{{index+1}}</td>
					<!-- <td>{{disease_item.continentcn}}</td> -->
					<td>{{disease_item.country}}</td>
					<td>{{disease_item.startdate}}</td>
					<td>{{disease_item.reportdate}}</td>
					<td>{{getReportTypeStr(disease_item)}}</td>
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
		<div class="tablecontent-cont" v-if="diseaseInfor==undefined">
			<div class="erro-show-cont">
				<span class="erro-show">该疫病今年没有报道！</span>
			</div>
		</div>
		<Modal
	        v-model="modal1"
	        width="600"
	        title="快报详情"
	    >
	        <div class="report-show">
            	<p><span class="title">快报标题</span><span>{{this.reportObj.Title}}</span></p>
            	<p><span class="title">报告类型</span><span>{{getReportTypeStr(this.report)}}</span></p>
            	<p><span class="title">开始日期</span><span>{{this.reportObj.StartDate}}</span></p>
            	<p><span class="title">确认日期</span><span>{{this.reportObj.ConfirmDate}}</span></p>
            	<p><span class="title">报告日期</span><span>{{this.reportObj.ReportDate}}</span></p>
            	<p><span class="title">提交OIE日期</span><span>{{this.reportObj.SubmitDate}}</span></p>
            	<p><span class="title">解决日期</span><span>{{this.reportObj.ResolvedDate}}</span></p>
            	<p><span class="title">通报原因</span><span>{{this.reportObj.Reason}}</span></p>
            	<p><span class="title">病候</span><span>{{this.reportObj.Manifestation}}</span></p>
            	<p><span class="title">病原</span><span>{{this.reportObj.CausalAgent}}</span></p>
            	<p><span class="title">血清型</span><span>{{this.reportObj.Serotype}}</span></p>
            	<p><span class="title">诊断本质</span><span>{{this.reportObj.Nature}}</span></p>
            	<p><span class="title">范围</span><span>{{this.reportObj.Pertains}}</span></p>
            	<p><span class="title">传染源</span><span>{{this.reportObj.source}}</span></p>
            	<p><span class="title">流行病学评论</span><span>{{this.reportObj.Comments}}</span></p>
            	<p><span class="title">防范措施</span><span>{{this.reportObj.Measures1}}</span></p>
            	<p><span class="title">将采用的处理方式</span><span>{{this.reportObj.Measures2}}</span></p>
            	<p><span class="title">诊断测试结果</span><span>{{this.reportObj.results}}</span></p>
            	<p><span class="title">未来报告</span><span>{{this.reportObj.future}}</span></p>
        	</div>
			<div slot="footer">
            <!-- <Button type="primary" size="large" long :loading="modal_loading" @click="del">Delete</Button> -->
        	</div>
		</Modal>
	</div>
</template>

<script>
	import request from "../../request/illdetails.js"
	import requestcoord from "../../request/viewindex.js";
	// import bus from "../../assets/js/eventBus.js"

	export default {
		props: {
			diseasevalue: {
				type: Number,
				default: 0
			},
			yearvalue: {
				type: String,
				default: null
			},
		},
		watch: {
			// diseasevalue: function(newValue, oldValue){
			//   alert(newValue);
			// 	this.querydieasedata();
      //
			// },
      diseasevalue:{
        handler: function (newValue, oldVal) {
          this.querydieasedata();
        },
        deep:true
      },
			yearvalue: function(newValue, oldValue){

			}
		},
		data () {
            return {
            	modal1: false,

            	reportObj: {},
            	report: {},

            	diseaseInfor: [],
            	diseasepageNo: 1,
            	diseasepageSize: 15,
            	diseasetotalCount: 0,
            	allcoordinates: {},		//全部爆发点，作为参数传给illspecialmap，子：coordinates、illcoordinates
				coordinates: {},		//当前点击快报的爆发点，子：outbreak(中间爆发点)outbreakfirst(首次爆发点)outbreakend(最后一次爆发点)outbreaks(全部爆发点)
				illcoordinates: {},		//根据筛选条件所显示的爆发点，子：outbreakfirst
            }
        },
		mounted(){		//async 异步请求
      // alert(this.diseasevalue+'组件收到的id')
      // alert(typeof this.diseasevalue+'组件收到的id')
			this.querydieasedata();
      //this.modal1 = true;
      console.log({})
      console.log(this.reportObj)//空{}
      console.log(this.report)


    },
		methods: {
			del(){
				this.modal1 = false;
			},

			async querydieasedata(){
				var data = await request.querydata(this.diseasepageNo, this.diseasepageSize, this.diseasevalue, this.yearvalue);
				this.queryoutbreaks(this.diseasevalue)
				this.diseaseInfor = data.list;

				console.log(this.diseaseInfor)
        this.getReportObj(this.diseaseInfor[0])

				this.diseasetotalCount = data.totalCount;
				this.$emit("getdiseasetotalCount", this.diseasetotalCount);
			},
			async queryByPrimeids(){
				var data = await request.queryByPrimeids(this.diseasevalue, this.yearvalue);
				this.illcoordinates = data;
			},
			// 疫病列表点击事件(查询爆发点)
			async trclick(report){
				this.queryoutbreaks(report.primeid);
			},
			// 疫病列表双击事件(获取快报json对象，弹窗)
			async getReportObj(report){
				this.reportObj = JSON.parse(report.jsontxt);
				this.report = report;
				this.modal1 = true;
			},
			//根据primeid查询爆发点
			async queryoutbreaks(id){
				this.queryByPrimeids();
				var data = await requestcoord.queryoutbreaks(id);
				this.coordinates = data;
				this.allcoordinates = {illcoordinates: this.illcoordinates, coordinates: this.coordinates};
				this.$emit("getallcoordinates", this.allcoordinates);
			},

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

		    async diseasepageChanged(page) {
		      this.diseasepageNo = page;
		      await this.querydieasedata();
		    },

		},
		components: {
		}
	}
</script>




