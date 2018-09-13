<style>
  .name-cont .ivu-select-dropdown {
    height: 200px;
  }

  .month-choice-cont .ivu-select-dropdown {
    height: 100px;
    background-color: #ccc;
    /* background-color: rgba(200, 200, 200, 0.8); */
  }

  .month-choice-cont .ivu-select-single .ivu-select-selection {
    height: 20px;
    border-radius: 10px;
    background-color: #ccc;
  }

  .month-choice-cont .ivu-select-selection .ivu-select-selected-value {
    line-height: 20px;
    color: #000;
  }
</style>

<style scoped>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .illdetails-containner {
    width: 100%;
    height: 100vh;
    background: #05121A url('../assets/main-background.jpg') no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
  }

  .header {
    width: 100%;
    height: 46px;
    background-color: rgba(24, 24, 64, 0.8);
    text-align: center;
  }

  .header span {
    line-height: 46px;
    color: #fff;
    font-size: 1.6em;
  }

  .body-containner {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }

  /* 四角边框加粗 and 边框标题 start */
  .border-top-left, .border-top-right, .border-bottom-left, .border-bottom-right {
    width: 50px;
    height: 50px;
    position: absolute;
    box-sizing: border-box;
  }

  .border-top-left {
    top: 0;
    left: 0;
    border-top: 4px solid #58e7e7;
    border-left: 4px solid #58e7e7;
  }

  .border-top-right {
    top: 0;
    right: 0;
    border-top: 4px solid #58e7e7;
    border-right: 4px solid #58e7e7;
  }

  .border-bottom-left {
    bottom: 0;
    left: 0;
    border-bottom: 4px solid #58e7e7;
    border-left: 4px solid #58e7e7;
  }

  .border-bottom-right {
    bottom: 0;
    right: 0;
    border-bottom: 4px solid #58e7e7;
    border-right: 4px solid #58e7e7;
  }

  .big-border {
    width: 80px;
    height: 80px;
    border-width: 7px;
  }

  .border-name-top {
    width: 120px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%);
    background-color: #0f122a;
    box-sizing: border-box;
    border-left: 3px solid #58e7e7;
    border-right: 3px solid #58e7e7;
  }

  /* 四角边框加粗end */

  /* 滚动条设置start */
  /*高宽分别对应横竖滚动条的尺寸*/
  .scorllbar::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /*滚动条里面小方块*/
  .scorllbar::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(150, 150, 150, 0.6);
    background: rgba(150, 150, 150, 0.5);
  }

  /*滚动条里面轨道*/
  .scorllbar::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(200, 200, 200, 0.8);
    border-radius: 0;
    background: rgba(200, 200, 200, 0.6);
  }

  /* 滚动条设置end */

  /* 左半边部分内容start */
  .body-left-cont {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .body-left-item1, .body-left-item2, .body-left-item3 {
    width: 100%;
    height: 33%;
    background-color: rgba(24, 24, 64, 0.5);
    /* border-radius: 10px; */
    position: relative;
    padding: 4px;
  }

  .body-left-item3 {
    box-sizing: border-box;
    border: solid 1px #032d60;
    box-shadow: 0px 0px 50px 10px #032d60 inset;
  }

  .line-chart-cont {
    height: 100%;
    background-color: rgba(0, 12, 59, 0.3);
    box-shadow: 0px 0px 50px 10px #032d60 inset;
    box-sizing: border-box;
    border: solid 1px #032d60;
  }

  .report-month-cont {
    height: 100%;
  }

  /* 快报-时间折线图 */
  .time-choice-cont {
    width: 100px;
    height: 20px;
    background-color: rgba(200, 200, 200, 0.8);
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }

  .month-choice-cont {
    width: 100px;
    height: 20px;
    position: absolute;
    bottom: 11px;
    left: 15px;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }

  /* 疫病百科部分start */
  /* 标题-绝对定位 */
  .body-left-item3 .item3-name-cont {
    background-color: #032d60;
    box-shadow: 0px 0px 20px 8px #58E7E7;
    box-sizing: border-box;
    /* border: solid 1px #032d60; */
    position: absolute;
    font-size: 1.2em;
    color: #fff;
    text-align: center;
    line-height: 30px;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    /* margin-left: 10px;
          margin-top: 6px; */
    top: 14px;
    left: 14px;
  }

  .item3-name-cont span {
    display: inline-block;
    height: 30px;
  }

  /* 标题end */
  .disease-cyclopedia-out-cont {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  /* 疫病百科部分end */
  /* 左半边部分内容end */

  /* 右半边部分内容start */
  .body-right-cont {
    width: 50%;
    height: 100%;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    background-color: rgba(24, 24, 64, 0.5);
    box-sizing: border-box;
    /* border: solid 7px rgba(88, 231, 231, 0.6); */
    /* 	border-radius: 10px; */
    overflow: hidden;
    padding: 7px;
    position: relative;
  }

  .right-content {
    height: 100%;
    box-sizing: border-box;
    border: solid 1px #032d60;
    background-color: rgba(0, 12, 59, 0.3);
    box-shadow: 0px 0px 50px 10px #032d60 inset;
  }

  .body-right-item1 {
    width: 100%;
    height: 48%;
  }

  .body-right-item2 {
    width: 100%;
    height: 52%;
  }

  /* 疫病快报板块start */
  .body-right-item1 {
    display: flex;
    flex-direction: column;
  }

  /* 疫病快报头部name+search */
  .name-cont {
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
  }

  .name-cont span {
    display: inline-block;
    color: #fff;
    font-size: 1.2em;
    margin-left: 15px;
  }

  .name-cont .choice-cont {
    display: flex;
  }

  /* 疫病快报头部end */
  /* 疫病快报内容部分start */
  .show-cont {
    width: 100%;
    height: 100%;
    display: flex;
  }

  /* 疫病情况show */
  .disease-show-cont {
    width: 50%;
    height: 100%;
    color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  /* 疫病情况end */
  /* 快报show */
  .report-show-cont {
    width: 50%;
    height: 100%;
  }

  /* 快报end */
  /* 疫病快报内容部分end */
  /* 疫病图像显示部分start */
  .body-right-item2 {
    display: flex;
  }

  /* 地图显示部分start */
  .map-cont {
    width: 58%;
    height: 100%;
    box-sizing: border-box;
    /* border: solid 1px #58e7e7; */
    overflow: hidden;
    position: relative;
    box-shadow: 0px 0px 50px 10px #032d60 inset;
  }

  /* 右下角提示板块start */
  .prompt-cont {
    width: 220px;
    height: 20px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    /* background-color: rgba(17, 86, 133, 0.6); */
    background-color: rgba(200, 200, 200, 0.8);
    display: flex;
    flex-shrink: 0;
    border-radius: 15px;
    color: #000;
    font-size: 0.8em;
  }

  .prompt-cont .prompt-item {
    width: 25%;
    /* background-color: #fff; */
    display: flex;
    line-height: 20px;
  }

  .prompt-cont .prompt-item div {
    margin-top: 2px;
    margin-right: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .prompt-cont .prompt-item:nth-child(1) {
    width: 30%;
    margin-left: 5px;
  }

  .prompt-cont .prompt-item .ill-first {
    background-color: #880000;
  }

  .prompt-cont .prompt-item .first {
    background-color: #ff0000;
  }

  .prompt-cont .prompt-item .middle {
    background-color: #ff6600;
  }

  .prompt-cont .prompt-item .end {
    background-color: #ffff00;
  }

  /* 地图显示部分end */
  /* 疫病大洲饼状图start */
  .piemap-cont {
    width: 42%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
  }

  .disease-continents {
    height: 70%;
    position: relative;
    margin-top: 15%;
  }

  .top-line {
    width: 80%;
    height: 1px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    box-sizing: border-box;
    border-top: solid 1px #032d60;
    background-color: rgba(0, 12, 59, 0.3);
    box-shadow: 0px 0px 50px 20px #032d60;
    /* background:yellow url('../assets/lightline.png') center; */
  }

  .pie-name {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 1.2em;
    color: lightskyblue;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* 饼状图下方颜色提示栏start */
  .pie-show {
    flex-shrink: 0;
    height: 80px;
    margin-bottom: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .show-line {
    height: 20px;
    padding-left: 2%;
    display: flex;
    justify-content: center;
  }

  .show-item {
    width: 40%;
    display: flex;
  }

  .show-color {
    width: 22px;
    border-radius: 6px;
  }

  .show-item span {
    padding-left: 5px;
    color: #fff;
  }

  /* 与饼状图相对应的颜色设置start */
  .purole {
    background-color: #AE43DC;
  }

  .red {
    background-color: #f00;
  }

  .orange {
    background-color: #ff6600;
  }

  .yellow {
    background-color: #E8BB18;
  }

  .green {
    background-color: #4bC65e;
  }

  .blue {
    background-color: #0f2aff;
  }

  /* 与饼状图相对应的颜色设置end */
  /* 饼状图下方颜色提示栏end */
  /* 疫病大洲饼状图end */
  /* 疫病图像显示部分end */
  /* 疫病快报板块end */

  /* 右半边部分内容end */
</style>

<template>
  <div class="illdetails-containner">
    <header class="header">
      <span>疫病详情</span>
    </header>
    <div class="body-containner">
      <div class="body-right-cont">
        <div class="right-content">
          <div class="border-top-left big-border"></div>
          <div class="border-top-right big-border"></div>
          <div class="border-bottom-left big-border"></div>
          <div class="border-bottom-right big-border"></div>
          <div class="body-right-item1">
            <div class="name-cont">
              <span>疫病快报</span>
              <div class="choice-cont">
                <Row style="margin-top:-1px; margin-right:5px;">
                  <Col span="12">
                    <DatePicker type="year" value="2018" placeholder="Select year" style="width: 70px"
                                @on-change="choiceYear"></DatePicker>
                  </Col>
                </Row>
                <Row style="margin-top:-1px; margin-right:10px;">
                  <Col span="12" style="padding-right:10px; width:160px;">
                    <Select v-model="diseasevalue" filterable @on-change="diseaseChoiseValue">
                      <Option v-for="item in diseasData" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
            <div class="show-cont">
              <div class="disease-show-cont">
                <disease-data :diseasData="diseasData1" :diseasevalue="diseasevalue"
                              :yearvalue="yearvalue" :totalCount="totalCount" :diseasename="diseasename"></disease-data>
              </div>
              <div class="report-show-cont">
                <disease-tab :diseasevalue="diseasevalue1" :yearvalue="yearvalue" @getallcoordinates="getallcoordinates"
                             @getdiseasetotalCount="getdiseasetotalCount"></disease-tab>
              </div>
            </div>
          </div>
          <div class="body-right-item2">
            <div class="map-cont">
              <div class="border-top-right"></div>
              <ill-world-map :allcoordinates="allcoordinates"></ill-world-map>
              <div class="prompt-cont">
                <div class="prompt-item">
                  <div class="ill-first"></div>
                  <span>筛选</span>
                </div>
                <div class="prompt-item">
                  <div class="first"></div>
                  <span>首次</span>
                </div>
                <div class="prompt-item">
                  <div class="middle"></div>
                  <span>中间</span>
                </div>
                <div class="prompt-item">
                  <div class="end"></div>
                  <span>最后</span>
                </div>
              </div>
            </div>
            <div class="piemap-cont">
              <div class="disease-continents">
                <div class="top-line"></div>
                <div class="pie-name">报 道 数</div>
                <ill-pie-map :pieCountCon="pieCountCon"></ill-pie-map>
              </div>
              <div class="pie-show">
                <div class="show-line">
                  <div class="show-item">
                    <div class="show-color purole"></div>
                    <span>亚洲({{pieCountCon[0].value}})</span>
                  </div>
                  <div class="show-item">
                    <div class="show-color red"></div>
                    <span>欧洲({{pieCountCon[1].value}})</span>
                  </div>
                </div>
                <div class="show-line">
                  <div class="show-item">
                    <div class="show-color orange"></div>
                    <span>非洲({{pieCountCon[2].value}})</span>
                  </div>
                  <div class="show-item">
                    <div class="show-color yellow"></div>
                    <span>大洋洲({{pieCountCon[3].value}})</span>
                  </div>
                </div>
                <div class="show-line">
                  <div class="show-item">
                    <div class="show-color green"></div>
                    <span>北美洲({{pieCountCon[4].value}})</span>
                  </div>
                  <div class="show-item">
                    <div class="show-color blue"></div>
                    <span>南美洲({{pieCountCon[5].value}})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="body-left-cont">
        <div class="body-left-item1">
          <div class="border-top-left"></div>
          <div class="border-top-right"></div>
          <div class="border-bottom-left"></div>
          <div class="border-bottom-right"></div>
          <div class="border-name-top">
            <span>报道-时间图</span>
          </div>
          <div class="line-chart-cont">
            <ill-report-year-map v-if="isreportyear=='year'" :diseasData="diseasData"
                                 :diseasevalue="diseasevalue" :diseasename="diseasename" ></ill-report-year-map>
            <div class="report-month-cont" v-if="isreportyear=='month'">
              <ill-report-month-map :diseasevalue="diseasevalue" :choiceid="choiceid"
                                    @getgroupyears="getgroupyears"></ill-report-month-map>
              <div class="month-choice-cont">
                <Row>
                  <Col span="12" style="width:90px;">
                    <Select v-model="choiceid">
                      <Option v-for="item in datechoice" :value="item.cid" :key="item.cid">{{ item.label }}</Option>
                    </Select>
                  </Col>
                </Row>
              </div>
            </div>
            <div class="time-choice-cont">
              <RadioGroup v-model="isreportyear">
                <Radio label="year">年</Radio>
                <Radio label="month">月</Radio>
              </RadioGroup>
            </div>
          </div>
        </div>
        <div class="body-left-item2">
          <div class="border-top-left"></div>
          <div class="border-top-right"></div>
          <div class="border-bottom-left"></div>
          <div class="border-bottom-right"></div>
          <div class="border-name-top">
            <span>国家-时间图</span>
          </div>
          <div class="line-chart-cont">
            <ill-coun-year-map :diseasData="diseasData" :diseasevalue="diseasevalue"></ill-coun-year-map>
          </div>
        </div>
        <div class="body-left-item3">
          <div class="border-top-left"></div>
          <div class="border-top-right"></div>
          <div class="border-bottom-left"></div>
          <div class="border-bottom-right"></div>
          <div class="item3-name-cont">
            <span>疫病百科</span>
          </div>
          <div class="disease-cyclopedia-out-cont">
            <disease-cyclopedia :diseasemapdatas="diseasemapdatas"></disease-cyclopedia>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import request from '../request/illdetails.js'
  import animalrequest from '../request/animalSpecies.js'
  import IllReportYearMap from './map/illreportyearmap.vue'
  import IllReportMonthMap from './map/illreportmonthmap.vue'
  import IllCounYearMap from './map/illcounyearmap.vue'
  import DiseaseCyclopedia from './illdetails/diseaseCyclopedia.vue'
  import DiseaseData from './illdetails/diseasedata.vue'
  import DiseaseTab from './illdetails/diseasetab.vue'
  import IllWorldMap from './map/illworldmap.vue'
  import IllPieMap from './map/illpiemap.vue'

  export default {
    data () {
      return {

        modal1: false,

        diseasevalue: 14,
        diseases: [],
        diseasData: [],
        yearvalue: '2018',

        reportcountCon: [],
        pieCountCon: [],

        isreportyear: 'year',
        choiceid: 0,
        allcoordinates: {},
        datechoice: [],

        diseasemapdatas: {},
        diseaselinks: [],

        totalCount: 0,
        diseaseType: '',
        diseasename: ''
      }
    },
    computed: {
      diseasevalue1 () {
        return this.diseasevalue
      },
      diseasData1 () {
        return this.diseasData
      }
    },
    mounted () {		//async 异步请求
      //console.log(this.$route.query.diseasename)
      this.diseasevalue = this.$route.query.diseaseType
      this.diseasename = this.$route.query.diseasename
      //alert(this.diseasevalue )
      //this.diseaseChoiseValue()
      this.diseaseselect()
      this.selectByContinent()
    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok')
      },
      cancel () {
        this.$Message.info('Clicked cancel')
      },

      getallcoordinates (val) {
        this.allcoordinates = val
      },
      getdiseasetotalCount (val) {
        this.totalCount = val
      },

      getgroupyears (val) {
        var arr = val
        for (var i = 0; i < arr.length; i++) {
          var obj = {}
          var str1 = arr[i][0].substr(2, 2)
          var str2 = arr[i][arr[i].length - 1].substr(2, 2)
          Object.assign(obj, {
            cid: i,
            label: str1 + '-' + str2,
          })
          this.datechoice.push(obj)
        }
      },
      // 根据疫病id查询易感动物
      async queryAnimalByDiseaseid (id) {
        var data = await animalrequest.queryAnimalByDiseaseid(id)
        this.diseaselinks = data
        // this.diseasemapdatas = {diseasedata: [], diseaselinks: []};
        this.diseasemapdatas = this.getdiseasedata()
        //console.log(this.diseasemapdatas);
      },
      // 查询所有疫病(包括id，名称等信息)
      async diseaseselect () {
        var data = await request.diseaseselect()
        this.diseases = data
        this.getDiseasData()
      },
      //疫病id+年查询大洲报道数
      async selectByContinent () {
        var data = await request.selectByContinent(this.diseasevalue, this.yearvalue)

        this.reportcountCon = data
        this.pieCountCon = this.getPieCountCon()
      },
      // 下拉框回调函数
      diseaseChoiseValue () {
        this.selectByContinent()
        this.queryAnimalByDiseaseid(this.diseasevalue)
        //console.log(this.diseasevalue)
      },
      choiceYear (year) {
        this.yearvalue = year
        this.selectByContinent()
      },
      querydata () {

      },
      // 根据id匹配疫病名称
      getNameById (id) {
        var diseaseName = ''
        for (var i = 0; i < this.diseasData.length; i++) {
          if (this.diseasData[i].value == id) {
            diseaseName = this.diseasData[i].label
          }
        }
        return diseaseName
      },
      // 疫病-易感动物数据格式标准化函数
      getdiseasedata () {
        var dname = this.getNameById(this.diseasevalue)
        // this.diseaselinks[0].source
        var diseasedata = [{
          name: dname, draggable: true, symbolSize: 60, itemStyle: {
            color: '#000'
          },
        }]
        for (var i = 0; i < this.diseaselinks.length; i++) {
          var obj = {
            draggable: true,
            symbolSize: 40,
            itemStyle: {color: '#f00'},
          }
          Object.assign(obj, {
            name: this.diseaselinks[i].target,
          })
          diseasedata.push(obj)
        }
        var mapdata = {diseasedata: diseasedata, diseaselinks: this.diseaselinks}
        return mapdata
      },
      // 疫病名称-id格式标准化
      getDiseasData () {
        for (var i = 0; i < this.diseases.length; i++) {
          var obj = {}
          Object.assign(obj, {
            value: this.diseases[i].id,
            label: this.diseases[i].oiednamecn,
          })
          this.diseasData.push(obj)
        }
      },
      // 大洲-报道数格式标准化
      getPieCountCon () {
        var pieArray = [{name: '亚洲', value: 0},
          {name: '欧洲', value: 0},
          {name: '非洲', value: 0},
          {name: '大洋', value: 0},
          {name: '北美', value: 0},
          {name: '南美', value: 0}]
        for (var i = 0; i < pieArray.length; i++) {
          for (var j = 0; j < this.reportcountCon.length; j++) {
            if (pieArray[i].name == this.reportcountCon[j].continentcn) {
              pieArray[i].value = this.reportcountCon[j].count
            }
          }
        }
        return pieArray
      }
    },
    components: {
      IllReportYearMap,
      IllReportMonthMap,
      IllCounYearMap,
      DiseaseCyclopedia,
      DiseaseData,
      DiseaseTab,
      IllWorldMap,
      IllPieMap,
    }
  }
</script>
