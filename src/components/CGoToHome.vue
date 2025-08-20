<template>
  <router-link :to="{ name: 'Home' }" class="go-to-home">
    &lt; back to home
  </router-link>
</template>

<style scoped>
.go-to-home {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  color: #141414;
  font-size: 16px;
  margin: 10px;
  background-color: white;
  border: solid black 1px;
  padding: 10px;
  border-radius: 3px;
  opacity: .5;
  transition: .1s;
}
.go-to-home:hover{
  opacity: 1;
}
@media screen and (height: 200px) {
  .go-to-home {
    display: none;
  }
}
</style>
