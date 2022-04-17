<template>
    <div class="backgr">
      <div class="btns">
        <img :src="post.image" class="postimage"/>
        <button @click="previousPlayer" class="text-4xl prev"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Small_arrow_pointing_left.svg/2560px-Small_arrow_pointing_left.svg.png"/></button> <br>
        <button @click="nextPlayer" class="text-4xl next"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Small_arrow_pointing_left.svg/2560px-Small_arrow_pointing_left.svg.png"/></button> 
        </div>

         <div class="playerProfile">
         <h1 class="font-heading Title">{{post.title}}</h1>
        <p class="postdesc">{{post.description}}</p>
        <nuxt-content :document="post" class="post"></nuxt-content>

    </div>
    </div>
</template>

<script>

  export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts/post' + params.id).fetch()

      return { post }
    },
    methods: {
      nextPlayer() {
        if(this.post.id < 12){
        this.$router.push('/blog/'+ (this.post.id + 1));
        }

      },
      previousPlayer() {
        if (this.post.id > 1){
        this.$router.push('/blog/'+ (this.post.id - 1));
        }
      }
    },
    
  }
  
</script>

<style>
.next {
  width: 50px;
  transform: rotate(180deg);
  position: absolute;
  background-color: white;
   top: 10px;
   right: 10px; 
   padding: 5px;
  border-radius: 15px;

}

.prev {
  width: 50px;
  position: absolute;
  background-color: white;
   top: 10px;
   left: 10px; 
   padding: 5px;
  border-radius: 15px;

}

.btns {
  position: relative;
  
}

.Title {
    font-size: 100px;
    
}

.postimage {
  width: 100%;

}

.postdesc {
  font-size: 25px;
}

.post {
  font-size: 20px;
}

.playerProfile {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.TImage {
  background-color: white;
  border: 3px solid black;
  border-radius: 15px;
  height: 250px;
}

.backgr {
  background: rgb(230,0,0);
  background: linear-gradient(0deg, rgba(230,0,0,1) 25%, rgba(0,66,140,1) 75%);

}

</style>