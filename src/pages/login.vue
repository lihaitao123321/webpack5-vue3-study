<template>
  <button @click="login()">登陆</button>
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