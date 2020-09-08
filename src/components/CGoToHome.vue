<template>
  <router-link :to="{ name: 'Home' }" class="go-to-home">
    back to home
  </router-link>
</template>

<script>
export default {
  name: 'CGoToHome',
  props: {
    color: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.go-to-home {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  color: #141414;
  font-size: 16px;
  margin: 10px;
  @media screen and (height: 200px) {
    display: none;
  }
}
</style>
