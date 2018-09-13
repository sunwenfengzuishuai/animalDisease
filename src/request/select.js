var http = require('superagent')
var base = require('./base').default
var url = base.root


export default {
	async countryselect(){
        var resp = await http.post(url + 'country/query/CountrySelect').query();
        return resp.body;
    },
    async diseaseselect(){
        var resp = await http.post(url + 'disease/queryAllTypes/select').query();
        return resp.body;
    },
    async querydata(pageNo, pageSize, typeid, diseaseid, oiediseaseid, name, oiecountryid, years){
        var resp = await http.post(url + 'disease/special/report/querydata').query({pageNo:pageNo, pageSize:pageSize, typeid:typeid, diseaseid:diseaseid, oiediseaseid:oiediseaseid, name:name, oiecountryid:oiecountryid, year:years});
        return resp.body;
    },
    async queryByPrimeids(typeid, diseaseid, name, oiecountryid, year){
        var resp = await http.post(url + 'disease/special/outbreak/queryByPrimeids').query({typeid:typeid, diseaseid:diseaseid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    async queryTopDisease(typeid, name, oiecountryid, year){
        var resp = await http.post(url + 'disease/special/diaease/query').query({typeid:typeid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    async queryproduct(itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'disease/special/product/query').query({itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    async querytrade(elementid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'disease/special/trade/query').query({elementid:elementid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
}
