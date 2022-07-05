<script lang="ts" setup>
import usestore from '../store'
const  {useStore}=usestore()
</script>

<template>
  <div className="list">
    <div className="article_item" v-for="item in useStore.NewList" :key="item.art_id">
      <h3 className="van-ellipsis">{{item.title}}</h3>
      <!-- img可能没有 -->
      <div className="img_box" v-for="img in item.cover.images" :key="img">
        <img
          :src="img"
          className="w100"
          alt=""
        />
      </div>
      <div className="info_box">
        <span>{{item.art_id}} </span>
        <span>{{item.comm_count}}评论</span>
        <span>{{item.pubdate}}</span>
      </div>
    </div>
  </div>
</template>

<style scoed lang="less"></style>
