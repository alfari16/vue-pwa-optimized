<template>
  <div>
    <div class="category container">
      <label for="kategori">Kategori</label>
      <select v-model="category.selected" id="kategori">
        <option v-for="single in category.choose" :value="single" :key="single">{{single.replace('-',' ').toUpperCase()}}</option>
      </select>
    </div>
    <div @click="moveDetail(single)" class="post" v-for="(single) in filteredPost" :key="single.title">
      <img-wrapper :key="single.title" :data-alt="single.title" :data-src="single.thumbnail"></img-wrapper>
      <h1 class="title">{{single.title}}</h1>
      <p class="author">{{single.author}}</p>
      <p class="content" v-html="minified(single.description)"></p>
    </div>
  </div>
</template>

<script>
import imgWrapper from './img-wrapper.vue'
export default {
  components:{imgWrapper},
  data(){
    return {
      post:[],
      scroll:0,
      category:{
        selected:'semua',
        choose:['semua']
      }
    }
  },
  async created(){
    const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
    const {items} = await data.json()
    this.post=items
    let allCat = []
    items.forEach(el=>{
      allCat.push(...el.categories)
    })
    const filtered = allCat.filter((el,idx,self) => self.indexOf(el)===idx)
    this.category.choose.push(...filtered)
  },
  methods:{
    minified(val){
      const temp = val.replace(/(<([^>]+)>)/ig,' ').split(' ')
      return temp.slice(0,20).join(' ')+' ...'
    },
    moveDetail(single){
      this.$emit('detail',single)
      this.$router.push('/detail')
    },
  },
  computed:{
    filteredPost(){
      return this.category.selected==='semua'?this.post:this.post.filter(el=>el.categories.find(el2 => el2===this.category.selected))
    }
  }
}
</script>
<style>
.title{
  font-size: 18px;
  margin-bottom: 0
}
.author{
  font-size: 13px;
  color: #444;
  margin-top: 3px
}
a{
  color: #3a7b6e;
  text-decoration: none
}
.post:hover{
  background-color: ghostwhite
}
.post:not(:first-child){
  padding-top: 16px
}
.post{
  border-bottom: 1px solid #ddd;
  transition: .3s;
  padding: 0 15px;
}
.content{
  line-height: 30px;
}
.category select{
  border-radius: 5px;
  height: 40px;
  flex: 1;
  margin-left: 30px
}
.category{
  display: flex;
  align-items: center
}
</style>
