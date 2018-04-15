<template>
  <div class="container">
    <template v-if="detail">
      <h1 class="title">{{detail.title}}</h1>
      <small class="author">{{detail.author}}</small>
      <div class="content" v-html="detail.content"></div>
    </template>
    <p v-if="check">Anda belum memilih detail post. Anda akan dialihkan dalam {{time}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      check: false,
      time: 3
    };
  },
  props: ["detail"],
  created() {
    if (!this.detail) {
      this.check = true;
      setInterval(() => {
        this.time--;
      }, 1000);
      setTimeout(() => {
        this.$router.replace('/')
      }, 3000);
    }
  }
};
</script>