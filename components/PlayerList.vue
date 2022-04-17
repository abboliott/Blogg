<template>
<div class="info">
    <img :src="item.image2" alt="player image" class="players" >
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
</div>
</template>

<script>
export default {
    props:['item'],
    data() {
        return {
        }
    }
}
</script>
 
<style>
.info{
    border-bottom: 3px solid white;
    font-weight: 700;
}

.players{ 
  border-radius: 10px; 
  border: 3px solid white;
  
}

</style>