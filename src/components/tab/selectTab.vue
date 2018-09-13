<style scoped>
    .cont{
        width: 150px;
        height: 500px;
        overflow-y: auto;
    }
    /* .continent{
        width: 100%;
        height: 30px;
        background-color: #ddd;
    }
    .continent-item{
        width: 100%;
        background-color: #e0e0e0;
    }
    .continent-item span{
        display: inline-block;
        height: 30px;
    }
    .country-cont{
        height: 300px;
        background-color: #000;
    }
    .country-item{
         width: 100%;
        height: 30px;
        background-color: #eee;
    } */

</style>
<template>
    <div class="cont">
        <div class="continent" @click="contShow = !contShow">全球</div>
        <ul v-if="contShow">
            <li v-for="continent in continents" @click="countryShow = !countryShow">
                {{continent.contname}}
                <ul v-if="countryShow">
                    <li v-for="country in continent.countrys">{{country.name}}</li>
                </ul>
            </li>
        </ul>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                contShow: false,
                countryShow: false,
                continents: [
                    {contname:'亚洲', countrys:[{name:'中国'},{name:'越南'},{name:'朝鲜'},{name:'泰国'}]},
                    {contname:'美洲', countrys: [{name:'中国'},{name:'越南'},{name:'朝鲜'},{name:'泰国'}]},
                    {contname:'南美洲', countrys: [{name:'中国'},{name:'越南'},{name:'朝鲜'},{name:'泰国'}]}, 
                    {contname:'北美洲', countrys: [{name:'中国'},{name:'越南'},{name:'朝鲜'},{name:'泰国'}]}, 
                    {contname:'欧洲', countrys: [{name:'中国'},{name:'越南'},{name:'朝鲜'},{name:'泰国'}]}, 
                    {contname:'西欧', countrys: [{name:'中国'},{name:'越南'},{name:'朝鲜'},{name:'泰国'}]}
                ],
                menu: [{
                  'level01': 'a',
                  'level02': ['a1', 'a2', 'a3', 'a3']
                },{
                  'level01': 'b',
                  'level02': ['b1', 'b2', 'b3', 'b3']
                },{
                  'level01': 'c',
                  'level02': ['c1', 'c2', 'c3', 'c3']
                },{
                  'level01': 'd',
                  'level02': ['d1', 'd2', 'd3', 'd3']
                }]
            }
        }
    }
</script>