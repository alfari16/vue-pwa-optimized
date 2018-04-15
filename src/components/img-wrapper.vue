<template>
  <div ref="imgComponent">
    <img v-if="check" :src="dataSrc" :alt="dataAlt" class="thumbnail">
    <div class="loading thumbnail" v-else></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: false
    };
  },
  props: ["data-src", "data-alt"],
  mounted(){
    let scroll = pageYOffset+outerHeight
    const position = this.$refs.imgComponent.getBoundingClientRect().top
    window.addEventListener('scroll',()=>{
      scroll = pageYOffset+outerHeight
      if(scroll>=position) this.check=true
    })
    if(scroll>=position) this.check=true
  }
};
</script>

<style>
img:not(.nav-img) {
  width: 100%;
  height: 200px;
  object-fit: scale-down;
}
</style>
