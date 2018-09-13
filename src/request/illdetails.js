var http = require('superagent')
var base = require('./base').default
var url = base.root


export default {
    // 从疫病字典表中查询所有疫病
    async diseaseselect(){
        var resp = await http.post(url + 'disease/queryAll').query();
        return resp.body;
    },
    // 按年查询大洲的疫病报道数
    async selectByContinent(diseaseid, year){
        var resp = await http.post(url + 'disease/special/report/statisticByContinentcn').query({diseaseid:diseaseid, year:year});
        return resp.body;
    },
    // 根据疫病id与年查询疫病快报
    async querydata(pageNo, pageSize, diseaseid, years){
        var resp = await http.post(url + 'disease/special/report/querydata').query({pageNo:pageNo, pageSize:pageSize, diseaseid:diseaseid, year:years});
        return resp.body;
    },
    // 根据疫病id查询筛选条件的首次爆发点
    async queryByPrimeids(diseaseid, year){
        var resp = await http.post(url + 'disease/special/outbreak/queryByPrimeids').query({diseaseid:diseaseid, year:year});
        return resp.body;
    },
    // 快报按年统计图 POST /api/v1/disease/special/report/statisticByYear
    async queryReportYear(diseaseid){
        var resp = await http.post(url + 'disease/special/report/statisticByYear').query({diseaseid:diseaseid});
        return resp.body;
    },
    // 快报按月统计图 POST /api/v1/disease/special/report/statisticByMouth
    async queryReportMonth(diseaseid){
        var resp = await http.post(url + 'disease/special/report/statisticByMouth').query({diseaseid:diseaseid});
        return resp.body;
    },
    // 国家数按月统计图  POST /api/v1/disease/special/report/statisticByYearCountCountry
    async queryCuntryCountYear(diseaseid){
        var resp = await http.post(url + 'disease/special/report/statisticByYearCountCountry').query({diseaseid:diseaseid});
        return resp.body;
    },
    // 统计该年所有疫病的报道总数  POST /api/v1/disease/special/report/statisticReportByYear
    async queryReportCountYear(year){
        var resp = await http.post(url + 'disease/special/report/statisticReportByYear').query({year:year});
        return resp.body;
    },

}
