<template>
  <div class="lht-404">
    <div>404 未找到相关页面</div>
    <img :src="image1" />
    <img :src="image11" />
    <img :src="image2" />
    <img :src="image22" />
    <img src="~@/assets/bg.jpg" />
    <img src="../../assets/bg.jpg" />
  </div>
</template>
<script setup>
import image1 from '../../assets/bg.jpg'
import image11 from '@/assets/bg.jpg'
const image2 = require('../../assets/bg.jpg')
const image22 = require('@/assets/bg.jpg')
</script>
<style scoped>
.lht-404 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
img {
  width: 100px;
  margin-top: 10px;
}
</style>