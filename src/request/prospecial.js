var http = require('superagent')
var base = require('./base').default
var url = base.root


export default {
    // 动物类型动物选择下拉框  POST /api/v1/animal/family/animalSelect
	async requestaniamlselect(animaltype){
        var resp = await http.post(url + 'animal/family/animalSelect').query({animaltype:animaltype});
        return resp.body;
    },
    // 根据选择条件查询生产结果 POST /api/v1/product/special/product/query
    async queryProData(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/product/query').query({pageNo:pageNo, pageSize:pageSize, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 查询畜牧生产产品 POST /api/v1/product/special/product/queryProducttion
    async queryProducttion(pageNo, pageSize, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/product/queryProducttion').query({pageNo:pageNo, pageSize:pageSize, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 查询根据畜牧生产畜牧贸易(活体动物)   POST /api/v1/product/special/trade/query
    async queryTradData(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/trade/query').query({pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 查询根据畜牧生产畜牧贸易(加工产品)   POST /api/v1/product/special/trade/queryTradeProduct
    async queryTradeProduct(pageNo, pageSize, elementid, oiefid, itemid, name, oiecountryid, year){
        var resp = await http.post(url + 'product/special/trade/queryTradeProduct').query({pageNo:pageNo, pageSize:pageSize, elementid:elementid, oiefid:oiefid, itemid:itemid, name:name, oiecountryid:oiecountryid, year:year});
        return resp.body;
    },
    // 根据筛选条件按照动物科查询疫病  POST /api/v1/product/special/report/queryReportByAnimalfamily
    async queryReportByAnimalfamily(afid, name, oiecountryid, year, pageNo, pageSize,){
        var resp = await http.post(url + 'product/special/report/queryReportByAnimalfamily').query({ afid:afid, name:name, oiecountryid:oiecountryid, year:year, pageNo:pageNo, pageSize:pageSize});
        return resp.body;
    },
}
