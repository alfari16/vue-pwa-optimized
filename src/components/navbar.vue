<template>
  <nav class="header container">
    <img :src="require('@/assets/logo.png')" v-if="show" class="nav-img" alt="Logo Vue.js">
    <span>VUE-WWWID</span>
    <span v-if="$route.meta.detail" @click="$router.go(-1)" class="kembali">Kembali</span>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  },
  mounted(){
    this.show=true
  }
}
</script>
<style scoped>
.header{
  display: flex;
  align-items: center;
}
span{
  font-weight: 700
}
img{
  height: 50%;
  margin-right: 10px
}
.kembali{
  flex: 1;
  text-align: right;
  color: #888;
  cursor: pointer;
}
</style>
