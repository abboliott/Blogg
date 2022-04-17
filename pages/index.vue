<template>
<div class="kalle">
   <div class="nbabar">
    <div class="nbabar2">
    </div>

    <div class="nbabar3">
      </div>
        </div>
  
</div>
</template>

<script>
export default {
  name: 'indexPage'

}
</script>

<style>
.kalle {
  background-image: url('https://logos-world.net/wp-content/uploads/2020/11/NBA-Emblem.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
  position: relative;
  z-index: top;
  
}

.nbabar {
  width: 100%; 
  height: 20px; 
  background-color: white;
  display: flex;

}

.nbabar2 {
    background-color: rgba(230,0,0,255);
     width: 50%; 
  height: 20px; 
 border-top-left-radius: 20px; 
 display: flex;
 flex-direction: row;
	justify-content: space-evenly;
	align-items: flex-start;
 
}

.nbabar3 {
     background-color: rgba(0,66,140,255);
     width: 50%; 
  height: 20px; 
 border-top-right-radius: 20px;
 display: flex;
 flex-direction: row;
	justify-content: space-evenly;
	align-items: flex-start;
}
</style>

