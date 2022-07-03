<template>
        <div>
            App组件
        </div>
         <Son :house="house" @getgift="getgifts"></Son>
</template>
    
<script setup lang='ts'>
  import { ref } from "vue";
   import Son from './components/Son.vue' 
   const house = ref('大别墅')  
   const getgifts = (gift: string, msg: string) => {
    console.log('1111' + gift + msg);
    
   }
</script>
    
<style>
    
</style>