<template>
  <div id="app">
    <div class="container">
      <div class="miantab-cont">
        <main-tab :user="user"></main-tab>
      </div>
      <div class="show-cont">
        <router-view></router-view> 
      </div>
    </div>
  </div>
</template>

<style>
  #app{
    margin: 0;
    padding: 0;
    background-color: #141738;
  }
  .container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-shrink: 1;
    justify-content: space-between;
  }
  .miantab-cont{
    width: 3%;
    height: auto;
    background-color: #141738;
  }
  .show-cont{
    width: 96%;
    height: 100%;
    margin-right: 0.5%;
  }
</style>

<script>
  import MainTab from './components/tab/maintab.vue'
  export default {
    data(){
      return{
        user: this.$route.query.user,
      }
    },
    mounted(){    //async 异步请求
     
    },
    methods: {
    },
    components: {
      MainTab,
    }
  }
</script>
