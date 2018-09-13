var http = require('superagent')
var base = require('./base').default
var url = base.root + "view/index/"


export default {
	async queryreport(day, id){
        var resp = await http.post(url + 'report/query').query({day:day, diseaseid:id})
        return resp.body
    },
    async queryproduct(pageNo, pageSize, itemid, oieCountryId){   //
        var resp = await http.post(url + 'product/query').query({pageNo:pageNo, pageSize:pageSize, id:itemid, oiecountryid:oieCountryId});
        // var resp = await http.post(url + 'product/query').query({pageNo:pageNo, pageSize:pageSize, id:itemid});
        return resp.body
    },
    async querytrade(pageNo, pageSize, elementid, itemid, oieCountryId){
    	var resp = await http.post(url + 'trade/query').query({pageNo:pageNo, pageSize:pageSize,elementid:elementid ,itemid:itemid, oiecountryid:oieCountryId});
        return resp.body;
    },
    async querydisease(){
    	var resp = await http.post(url + 'diaease/query').query()
        return resp.body
    },
    async queryoutbreaks(primeid){
        var resp = await http.post(url + 'outbreak/query').query({primeid:primeid})
        return resp.body
    },
}
