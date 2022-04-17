<template>
    <div>
        <div class="font-heading text-8xl text-center bg-white h-28 header">   
        <NavBar />
        <!-- <NuxtLink to="/" class="title"> My NBA Blog </NuxtLink> 
        <NuxtLink to="/posts" class="font-heading Post">Players</NuxtLink>     -->
        </div>
   
        <nuxt/>
        

    </div>
</template>

<style>
.header {
    display: flex; 
    justify-content: space-around;
    top: 0;

}

.meny {
   background-repeat: no-repeat;
   background-size: 100%;
   height: 100px;
   
}

.pinfo {
    font-weight: 900;

}
</style>