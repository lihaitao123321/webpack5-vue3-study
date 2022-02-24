<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let count1 = ref(111)
let count2 = 222
</script>
<script script >
export default {
  data () {
    return { count3: 333 }
  },
  mounted () {
    let timer = setTimeout(() => {
      this.count1 = 111111
      this.count2 = 222222
      this.count3 = 333333
      clearTimeout(timer)
    }, 2000)
  }
}
</script>
<style scoped>
.test {
  color: red;
}
</style>