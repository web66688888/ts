<script lang="ts" setup>
import UseStore from '../store'
const {useStore} = UseStore()
useStore.getChannelList()
useStore.getNewlist(0,Date.now())
const hclick=(active:number)=>{
    useStore.active=active
    useStore.getNewlist(active,Date.now())
}
</script>

<template>
  <ul class="catagtory">
    <li :class="{select:useStore.active===item.id}" @click="hclick(item.id)" v-for="item in useStore.ChannelList">{{item.name}}</li>
  </ul>
</template>

<style scoed lang="less"></style>
