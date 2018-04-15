<template>
  <div class="outer">
    <navbar></navbar>
    <router-view @detail="changeDetail" :detail="detail"></router-view>
    <footer>
      <p>Made with &#10084; from Malang - Indonesia</p>
      <a href="https://github.com/alfari16" target="_blank" title="find me on github">
        <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/256/github-256-black.png" alt="Github icon with transparent background">
      </a>
    </footer>
  </div>
</template>

<script>
import navbar from '~/navbar.vue'
export default {
  components:{navbar},
  data(){
    return {
      detail:null,
      check:false
    }
  },
  methods:{
    changeDetail(e){
      this.detail=e
    }
  },
  mounted(){
    setTimeout(() => {
      this.check=true
    }, 5000);
  }
};
</script>
<style>
.outer{
  max-width: 100%;
  width: 520px;
  margin: 0 auto;
}
footer{
  text-align: center
}
footer p{
  margin-bottom: 0
}
footer img{
  width: 80px!important;
  height: auto!important
}
</style>

