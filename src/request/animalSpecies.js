var http = require('superagent')
var base = require('./base').default
var url = base.root + "animalSpecies/"


export default {
	async queryAnimalByDiseaseid(id){
        var resp = await http.post(url + 'queryAnimalByDiseaseid').query({diseaseid:id})
        return resp.body
    },
}
