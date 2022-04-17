<template>
    <div id="container">
    <img src="https://placekitten.com/g/193/129">
    <div id="example">This is my div</div>
    <div id="example">this is not my div</div>

</div>
</template>

<style>

img {
    border: 2px solid black;   
}

#container {
    position: relative;  

}

#example {
   position: absolute;
   top: 10px;
   left: 10px; 
    
   padding: 5px;
   background-color: white;
   border: 2px solid red;
}
</style>