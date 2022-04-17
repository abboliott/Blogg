<template>
      <div>
        <div class="backgr">
         <div class="back">
    <div class="inverted">
    
    </div>

        </div>
  <div class="flex flex-wrap justify-center">
    <div @click="goToPlayer(post.id)" class="w-80 m-4 player" v-for="post in posts" :key="post.id">
      <PlayerList :item="post"></PlayerList>
    </div>
  </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$content}) {
    let posts = await $content('posts').sortBy("id", "asc").without(['body']).fetch()
    return {
      posts
    }
  },
  methods: {
    goToPlayer(id) {
      this.$router.push('/blog/'+id)
    }
  }
}
</script>

<style>
.player:hover {
 cursor: pointer;

}

.inverted {
  width: 100%; 
  height: 20px; 
  background-color: rgba(0,66,140,255);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

}

.back {
    background-color: white;
     width: 100%; 
  height: 20px; 
 
}

.backgr {
  background: rgb(230,0,0);
  background: linear-gradient(0deg, rgba(230,0,0,1) 25%, rgba(0,66,140,1) 75%);

}
</style>