<template>
  <div @click="login()">登陆</div>
</template>
<script script >
export default {
  methods: {
    login () {
      this.$router.push('/home')
    }
  }
}
</script>